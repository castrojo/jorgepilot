import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// ============================================================================
// CUSTOMIZATION: Change these values to personalize your pilot
// ============================================================================
const GITHUB_USERNAME = 'castrojo'; // Your GitHub username
const DISPLAY_NAME = 'Jorge'; // Your name (e.g., 'Jorge', 'Jeefy', 'MrBobby')
const TAGLINE = 'Metallica in your brain, all the time.'; // Your custom tagline

// Derived values - no need to edit these
const SITE_TITLE = `${DISPLAY_NAME}pilot`;
const GITHUB_AVATAR_URL = `https://avatars.githubusercontent.com/${GITHUB_USERNAME}`;
// ============================================================================

const config: Config = {
  title: SITE_TITLE,
  tagline: TAGLINE,
  favicon: `${GITHUB_AVATAR_URL}?size=64`,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://${GITHUB_USERNAME}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jorgepilot',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: GITHUB_USERNAME, // Usually your GitHub org/user name.
  projectName: 'jorgepilot', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${GITHUB_USERNAME}/jorgepilot/tree/main/website/`,
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: SITE_TITLE,
      logo: {
        alt: `${SITE_TITLE} Logo`,
        src: `${GITHUB_AVATAR_URL}?size=40`,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: `https://github.com/${GITHUB_USERNAME}/jorgepilot`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${GITHUB_USERNAME}/jorgepilot`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Copilot Scratchpad. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
