import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const math = require('remark-math');
const katex = require('rehype-katex');

const config: Config = {
  title: 'JAM Docs',
  tagline: 'Implementors Knowledge Base',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://jam-docs.onrender.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jambrains', // Usually your GitHub org/user name.
  projectName: 'jam-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jambrains/jam-docs/tree/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/jam-chain-docs-banner.png',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'JAM Docs',
      logo: {
        alt: 'JAM Docs Logo',
        src: 'img/polkadot-shift-dark.png',
        srcDark: 'img/polkadot-shift-light.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge',
        },
        {
          type: 'docSidebar',
          sidebarId: 'daoSidebar',
          position: 'left',
          label: 'DAO',
        },
        {
          href: 'https://github.com/jambrains/jam-docs',
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
              label: 'Knowledge',
              to: '/',
            },
            {
              label: 'DAO',
              to: '/dao',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Graypaper',
              href: 'https://graypaper.com/',
            },
            {
              label: 'Prize',
              href: 'https://jam.web3.foundation/',
            },
            {
              label: 'jamcha.in',
              href: 'https://jamcha.in/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jambrains/jam-docs',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
