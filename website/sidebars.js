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
      type: 'category',
      label: 'Company',
      items: [
        'company/engagement-models',
        'company/company-bible',
        'company/vision-and-mission',
        'company/core-principles',
        'company/new-engineer-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Framework',
      items: ['framework/d2e', 'framework/principles'],
    },
    {
      type: 'category',
      label: 'Delivery',
      items: [
        'delivery/pricing-bible',
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
