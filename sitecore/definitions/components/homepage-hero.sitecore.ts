import {   Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HomepageHero component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function HomepageHero(manifest: Manifest) {
  manifest.addComponent({
    name: 'HomepageHero',
    templateName: 'HomepageHero',
  });
}
