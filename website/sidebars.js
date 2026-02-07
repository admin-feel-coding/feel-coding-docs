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
      items: ['company/engagement-models'],
    },
    {
      type: 'category',
      label: 'Framework',
      items: ['framework/d2e', 'framework/principles'],
    },
    {
      type: 'category',
      label: 'Delivery',
      items: ['delivery/pricing-bible', 'delivery/standards', 'delivery/handoff'],
    },
  ],
};

export default sidebars;
