import {   Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function Header(manifest: Manifest) {
  manifest.addComponent({
    name: 'header',
    templateName: 'header',
  });
}
