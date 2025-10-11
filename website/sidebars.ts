import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'CUSTOMIZATION',
    {
      type: 'category',
      label: 'CNCF',
      collapsed: false,
      items: [
        'cncf-rust-analysis',
        'cncf-project-moving-levels-status',
        'cncf-archived-projects-report',
        'cncf-health-checks-report',
        'tag-contributor-strategy-guide',
        'cloud-custodian-health-check',
        'helm-health-check',
        'external-secrets-operator-health-check',
        'kubeflow-pipelines-health-check',
      ],
    },
    {
      type: 'category',
      label: 'Universal Blue',
      collapsed: false,
      items: [
        'ublue-build-optimization',
        'copr-analysis',
        'bluefin-health-check',
        'bazzite-health-check',
      ],
    },
    {
      type: 'category',
      label: 'Other Projects',
      collapsed: false,
      items: [
        'ibroadcast-dl-health-check',
        'mcp-dbus-health-check',
        'mcp-linux-ssh-health-check',
        'raycast-plugin-api-analysis',
      ],
    },
  ],
};

export default sidebars;
