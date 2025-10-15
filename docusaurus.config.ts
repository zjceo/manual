import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentación Facturador electrónico',
  tagline: 'Guía Absoluta del Facturador Pro: Pro 6, Pro X y Pro 7 para Todos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zjceo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zjceo',
  projectName: 'manual',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zjceo/manual/tree/main/',
            
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    './synonyms-plugin.js',

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'proX',
        path: 'ProX',
        routeBasePath: 'proX',
        sidebarPath: './prox.ts',
        docItemComponent: "@theme/ApiItem", // ✅ Agregado para OpenAPI
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pro6',
        path: 'Pro6',
        routeBasePath: 'pro6',
        sidebarPath: './pro6.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pro7',
        path: 'Pro7',
        routeBasePath: 'pro7',
        sidebarPath: './pro7.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chatbuho',
        path: 'ChatBuho',
        routeBasePath: 'chatbuho',
        sidebarPath: './chatbuho.ts',
      }
    ], 
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'qrbuho',
        path: 'QrBuho',
        routeBasePath: 'qrbuho',
        sidebarPath: './qrbuho.ts',
        docItemComponent: "@theme/ApiItem", // ✅ Agregado para OpenAPI
      }
    ], 

    // Plugin OpenAPI para Facturador
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "facturador",
        docsPluginId: "classic",
        config: {
          anulacion_boleta: {
            specPath: "apifacturador/AnulacionBoletas",
            outputDir: "docs/facturador/Anulacion-Boletas",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          anulacion_facturas: {
            specPath: "apifacturador/AnulaciónFacturasNotas",
            outputDir: "docs/facturador/Anulacion-facturas",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          generar_boleta: {
            specPath: "apifacturador/GenerarBoleta",
            outputDir: "docs/facturador/Generar-boleta",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          generar_cotización: {
            specPath: "apifacturador/GenerarCotizacion",
            outputDir: "docs/facturador/Generar-cotizacion",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          generar_factura: {
            specPath: "apifacturador/GenerarFactura",
            outputDir: "docs/facturador/Generar-factura",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          generar_notas: {
            specPath: "apifacturador/GenerarNotas",
            outputDir: "docs/facturador/Generar-notas",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          generar_resumenes: {
            specPath: "apifacturador/GenerarResúmenes",
            outputDir: "docs/facturador/Generar-resumenes",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          guia_remision: {
            specPath: "apifacturador/GuiaDeRemision",
            outputDir: "docs/facturador/Guia-remision",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          inventario: {
            specPath: "apifacturador/Inventario",
            outputDir: "docs/facturador/inventario",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          productos: {
            specPath: "apifacturador/Productos",
            outputDir: "docs/facturador/productos",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          retencion: {
            specPath: "apifacturador/Retencion",
            outputDir: "docs/facturador/retencion",
            baseUrl: "/facturador",
            sidebarOptions: {},
          },
          Clientes: {
            specPath: "apifacturador/Clientes",
            outputDir: "docs/facturador/clientes",
            baseUrl: "/facturador",
            sidebarOptions: {},
          }
        }
      }
    ],

    // Plugin OpenAPI para QrBuho (separado y corregido)
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "qrbuho_api",
        docsPluginId: "qrbuho",
        config: {
          enviar_mensaje: {
            specPath: "apiqrbuho/Enviarmensaje",
            outputDir: "QrBuho/api",
            baseUrl: "/qrbuho/api",
            sidebarOptions: {},
          },
          enviar_multimedia: {
            specPath: "apiqrbuho/Enviarmultimedia",
            outputDir: "QrBuho/api",
            baseUrl: "/qrbuho/api",
            sidebarOptions: {},
          },
          enviar_pdf: {
            specPath: "apiqrbuho/Enviarpdf",
            outputDir: "QrBuho/api",
            baseUrl: "/qrbuho/api",
            sidebarOptions: {},
          },
        },
      },
    ],

    // Plugin OpenAPI para ProX
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "prox_api",
        docsPluginId: "proX",
        config: {
          anulacion_boleta: {
            specPath: "apifacturador/AnulacionBoletas",
            outputDir: "ProX/devs/api/Anulacion-Boletas",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          anulacion_facturas: {
            specPath: "apifacturador/AnulaciónFacturasNotas",
            outputDir: "ProX/devs/api/Anulacion-facturas",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          generar_boleta: {
            specPath: "apifacturador/GenerarBoleta",
            outputDir: "ProX/devs/api/Generar-boleta",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          generar_cotización: {
            specPath: "apifacturador/GenerarCotizacion",
            outputDir: "ProX/devs/api/Generar-cotizacion",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          generar_factura: {
            specPath: "apifacturador/GenerarFactura",
            outputDir: "ProX/devs/api/Generar-factura",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          generar_notas: {
            specPath: "apifacturador/GenerarNotas",
            outputDir: "ProX/devs/api/Generar-notas",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          generar_resumenes: {
            specPath: "apifacturador/GenerarResúmenes",
            outputDir: "ProX/devs/api/Generar-resumenes",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          guia_remision: {
            specPath: "apifacturador/GuiaDeRemision",
            outputDir: "ProX/devs/api/Guia-remision",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          inventario: {
            specPath: "apifacturador/Inventario",
            outputDir: "ProX/devs/api/inventario",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          productos: {
            specPath: "apifacturador/Productos",
            outputDir: "ProX/devs/api/productos",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          retencion: {
            specPath: "apifacturador/Retencion",
            outputDir: "ProX/devs/api/retencion",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          },
          Clientes: {
            specPath: "apifacturador/Clientes",
            outputDir: "ProX/devs/api/clientes",
            baseUrl: "/proX/devs/api",
            sidebarOptions: {},
          }
        }
      }
    ],
  ],

  themes: [
    'docusaurus-theme-openapi-docs',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // Configuraciones para búsqueda global
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/', // Importante: cambia esto para buscar en todas las rutas de docs
        language: ["es"], // Idiomas que quieres indexar
        searchContextByPaths: ["docs"], // Asegura búsqueda global en docs
        useAllContextsWithNoSearchContext: true, // Compartir índices entre contextos
        
        // Límites y configuraciones de búsqueda
        searchResultLimits: 15, // Aumenta el número de resultados
        searchResultContextMaxLength: 100, // Más contexto en los resultados
        highlightSearchTermsOnTargetPage: true, // Resaltar términos de búsqueda
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo_buho.png',
    navbar: {
      title: 'Fastura',
      logo: {
        alt: 'Documentación de facturación',
        src: 'img/fastura.svg',
      },
      items: [
        {to: '/pro6', label: 'Pro 6', position: 'left'},
        {to: '/proX', label: 'Pro X', position: 'left'},
        {to: '/pro7', label: 'Pro 7', position: 'left'},
        {to: '/chatbuho', label: 'Chat Buho', position: 'left'},
        {to: '/qrbuho', label: 'QR Buho', position: 'left'},
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        // hideable: true, 
      },
    },
    footer: {
      style: 'dark',
      links: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash', 'yaml', 'nginx'],
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
    },
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;