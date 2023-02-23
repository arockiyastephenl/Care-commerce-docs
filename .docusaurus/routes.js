import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '306'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2b0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '752'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '33f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9d5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e4a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd96'),
    routes: [
      {
        path: '/docs/category/ondc-api',
        component: ComponentCreator('/docs/category/ondc-api', '374'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/overview',
        component: ComponentCreator('/docs/category/overview', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/seller-api',
        component: ComponentCreator('/docs/category/seller-api', 'afb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/Confirm',
        component: ComponentCreator('/docs/ONDCAPI/Confirm', 'e64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/InitAPI',
        component: ComponentCreator('/docs/ONDCAPI/InitAPI', '649'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/logisticapi',
        component: ComponentCreator('/docs/ONDCAPI/logisticapi', 'c34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/Overview-About-ONDC-API',
        component: ComponentCreator('/docs/ONDCAPI/Overview-About-ONDC-API', '1f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/Search-OnSearchAPI',
        component: ComponentCreator('/docs/ONDCAPI/Search-OnSearchAPI', 'fab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/SelectAPI',
        component: ComponentCreator('/docs/ONDCAPI/SelectAPI', '907'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Overiview/Overview-0f-Care-Commerce',
        component: ComponentCreator('/docs/Overiview/Overview-0f-Care-Commerce', '914'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Overiview/Overview-0f-E-Commerce',
        component: ComponentCreator('/docs/Overiview/Overview-0f-E-Commerce', '0d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Overiview/Overview-0f-ONDC',
        component: ComponentCreator('/docs/Overiview/Overview-0f-ONDC', '284'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/StoreAPI/intro',
        component: ComponentCreator('/docs/StoreAPI/intro', 'd10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/StoreAPI/Location_API',
        component: ComponentCreator('/docs/StoreAPI/Location_API', 'bae'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '718'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
