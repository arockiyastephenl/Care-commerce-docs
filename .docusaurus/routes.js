import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3e0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '213'),
    routes: [
      {
        path: '/docs/category/ondc',
        component: ComponentCreator('/docs/category/ondc', 'b49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Confirm',
        component: ComponentCreator('/docs/ONDC/Confirm', '2f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Flow diagram',
        component: ComponentCreator('/docs/ONDC/Flow diagram', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Get Started',
        component: ComponentCreator('/docs/ONDC/Get Started', '82d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Init',
        component: ComponentCreator('/docs/ONDC/Init', 'a32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Introduction',
        component: ComponentCreator('/docs/ONDC/Introduction', 'bfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/logisticapi',
        component: ComponentCreator('/docs/ONDC/logisticapi', '217'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Search',
        component: ComponentCreator('/docs/ONDC/Search', '84b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Select',
        component: ComponentCreator('/docs/ONDC/Select', '68c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ONDC/Usecase',
        component: ComponentCreator('/docs/ONDC/Usecase', 'd14'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a7b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
