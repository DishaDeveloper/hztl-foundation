import { Manifest, ItemDefinition } from '@sitecore-jss/sitecore-jss-dev-tools';
import { mergeFs, MergeFsResult } from '@sitecore-jss/sitecore-jss-dev-tools';
import { resolve as resolvePath } from 'path';
import { existsSync as fileExistsSync } from 'fs';

/**
 * Adds non-route content items to the disconnected manifest.
 * Content items are conventionally defined in /data/content, similar to route items.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 */
export default function addContentToManifest(manifest: Manifest): Promise<void> {
  const rootItemName = 'Content';
  const startPath = './data/content'; // relative to process invocation (i.e. where package.json lives)

  if (!fileExistsSync(startPath)) {
    return Promise.resolve();
  }

  return mergeFs(startPath)
    .then((result) => {
      const items = convertToContentItems(
        result,
        resolvePath(startPath),
        rootItemName,
        manifest.language
      );
      return items;
    })
    .then((contentData) => {
      if (contentData) {
        manifest.addContent(contentData);
      }
    });
}

/**
 * Maps filesystem content data into manifest content item data.
 */
function convertToContentItems(data: MergeFsResult, basePath: string, rootItemName: string, language: string): ItemDefinition {
  const itemPath = convertPhysicalContentPathToItemRelativePath(data.path, basePath);
  const name = itemPath.substr(itemPath.lastIndexOf('/') + 1);

  let result;

  const contentItemPattern = new RegExp(`^${language}\\.(yaml|yml|json)$`, 'i');

  const contentFileData = data.files.find((f) => contentItemPattern.test(f.filename));

  if (contentFileData && contentFileData.contents) {
    // the path has a valid content item definition
    result = contentFileData.contents;

    // Set the path to the item when imported in Sitecore.
    // NOTE: Importing to any Sitecore path the import user has rights to is allowed; '$site/Content' is a convention only.
    result.path = itemPath;

    // content item name defaults to parent folder name if not explicit
    if (!result.name) {
      result.name = name;
    }
  } else if (data.folders.length > 0) {
    // The path does not have a content item definition (i.e. en.yml),
    // but it does have child folders (which may contain valid content items)
    // it will be defined as a Folder item in Sitecore.
    result = {
      path: itemPath,
      name: name || rootItemName,
      displayName: name || rootItemName,
      template: 'Folder',
      children: [],
    };
  }

  // recursively process child paths
  if (data.folders.length > 0) {
    result.children = data.folders
      .map((folder) => convertToContentItems(folder, basePath, rootItemName, language))
      .filter((item) => item); // remove null results
  }

  return result;
}

/**
 * Converts a physical filesystem path into a relative Sitecore item path.
 * i.e. if physicalPath = /var/log and basePath = /var, this returns /log.
 */
function convertPhysicalContentPathToItemRelativePath(physicalPath: string, basePath: string) {
  const targetPathSeparator = '/';

  // normalize path separators to /
  const normalizedPath = physicalPath.replace(basePath, '').replace(/\\/g, targetPathSeparator);

  if (!normalizedPath) {
    return targetPathSeparator;
  }

  return normalizedPath.indexOf(targetPathSeparator) > 0
    ? `${targetPathSeparator}${normalizedPath}`
    : normalizedPath;
}
