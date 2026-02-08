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
        'company/company-bible',
        'company/vision-and-mission',
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
        'templates/decide-template',
        'templates/execute-template',
        'templates/operate-template',
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
