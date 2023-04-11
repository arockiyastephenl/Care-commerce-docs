// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Care Commerce Documentation",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        // title: "Care Commerce ",
        logo: {
          alt: "My Site Logo",
          src: "img/cclogo.svg",
        },
        // items: [
        //   {
        //     type: "doc",
        //     docId: "Overiview/Overview-0f-E-Commerce",
        //     position: "left",
        //     label: "Overview",
        //   },
        //   // { to: "/docs/category/ondc-api", label: "ONDC", position: "left" },
        //   // { to: "/docs/category/seller-api", label: "Seller API", position: "left" },
        //   { to: `https://www.carecommerce.in/`, label: "Care Commerce", position: "left" },
        // ],
      },
      footer: {
        style: "dark",
        links: [
          {
            // title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/",
              },
              // {
              //   label: "Overview",
              //   to: "/docs/category/overview",
              // },
              {
                label: "ONDC",
                to: "/docs/ONDC/Introduction",
              },
              // {
              //   label: "Care Commerce",
              //   to: "/docs/category/seller-api",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Colakin Pty Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
