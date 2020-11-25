// eslint-disable-next-line no-unused-vars
import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the SectionHero component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'SectionHero',
    icon: SitecoreIcon.Layout,
    placeholders: ['section-hero-content']
  });
}
