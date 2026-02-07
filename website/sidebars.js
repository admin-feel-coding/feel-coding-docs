// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'start-here',
      label: 'Start Here',
    },
    {
      type: 'category',
      label: 'Company',
      items: [
        'company/company-bible',
        'company/vision-and-mission',
        'company/core-principles',
        'company/engagement-models',
        'company/new-engineer-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Framework',
      items: ['framework/d2e', 'framework/decide', 'framework/execute', 'framework/operate'],
    },
    {
      type: 'category',
      label: 'Delivery',
      items: [
        'delivery/pricing',
        'delivery/lifecycle',
        'delivery/standards',
        'delivery/handoff',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'templates/project-readme',
        'templates/decision-record',
        'templates/discovery-summary',
        'templates/sdlc-phase-plan',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/glossary'],
    },
  ],
};

export default sidebars;
