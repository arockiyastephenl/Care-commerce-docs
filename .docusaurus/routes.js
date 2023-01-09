import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bd0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '242'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '03d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c30'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'dee'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '825'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd5a'),
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
        path: '/docs/ONDCAPI/InitAPI',
        component: ComponentCreator('/docs/ONDCAPI/InitAPI', '649'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/On SearchAPI',
        component: ComponentCreator('/docs/ONDCAPI/On SearchAPI', '1c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/OnInitAPI',
        component: ComponentCreator('/docs/ONDCAPI/OnInitAPI', 'a3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDCAPI/OnSelectAPI',
        component: ComponentCreator('/docs/ONDCAPI/OnSelectAPI', '034'),
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
        path: '/docs/ONDCAPI/SearchAPI',
        component: ComponentCreator('/docs/ONDCAPI/SearchAPI', '14d'),
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
    component: ComponentCreator('/', 'f8a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
