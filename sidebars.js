/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  java11: [
    "welcome-page-id",
    {
      type: 'category',
      label: 'Welcome Java',
      collapsed: false,
      items: [
        'welcome-java/compile-java-page-id',
        'welcome-java/import-naming-conflict-page-id',
        'welcome-java/order-elements-in-class-page-id',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      collapsed: false,
      items: [
        'database/basic-database-notes-page-id',
        'database/jdbc-page-id',
        'database/connect-to-database-page-id',
        'database/statement-page-id',
      ]
    }
  ],
};

module.exports = sidebars;
