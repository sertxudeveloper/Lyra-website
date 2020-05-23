module.exports = {
  dest: 'public/.vuepress/docs',
  base: '/docs/',
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Lyra Docs'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Lyra Docs'
    }
  },
  head: [
    // Head HTML tags
  ],
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    displayAllHeaders: true,
    sidebarDepth: 2,
    smoothScroll: true,
    searchPlaceholder: 'Search...',
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          {
            text: 'Home',
            link: 'https://lyra.sertxudeveloper.com'
          },
          {
            text: "Version",
            link: "/",
            items: [
              {text: "v1.x", link: "/en/v1.x/"},
              // {text: "v2.x", link: "/en/v2.x/"},
            ],
          }
        ],
        sidebar: {
          '/en/v1.x/': [
            {
              title: "Introducción",
              collapsable: false,
              children: [
                '/es/v1.x/welcome.md',
              ]
            },
            {
              title: "Primeros pasos",
              collapsable: false,
              children: [
                '/es/v1.x/getting-started/installation.md',
                '/es/v1.x/getting-started/getting-started.md',
              ]
            },
          ],
        }
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        nav: [
          {
            text: 'Home',
            link: 'https://lyra.sertxudeveloper.com'
          },
          {
            text: "Versión",
            link: "/",
            items: [
              {text: "v1.x", link: "/es/v1.x/"},
              // {text: "v2.x", link: "/es/v2.x/"},
            ]
          }
        ],
        sidebar: {
          '/es/v1.x/': [
            {
              title: "Introducción",
              collapsable: false,
              children: [
                '/es/v1.x/welcome.md',
                '/es/v1.x/introduction/support-policy.md',
                '/es/v1.x/introduction/upgrade-guide.md',
                '/es/v1.x/introduction/contributions.md',
              ]
            },
            {
              title: "Primeros pasos",
              collapsable: false,
              children: [
                '/es/v1.x/getting-started/installation.md',
                '/es/v1.x/getting-started/getting-started.md',
              ]
            },
            {
              title: "Campos",
              collapsable: false,
              children: [
                '/es/v1.x/fields/defining.md',
                '/es/v1.x/fields/functionalities.md',
                '/es/v1.x/fields/types.md',
                '/es/v1.x/fields/relations.md',
              ]
            },
            {
              title: "Dashboard",
              collapsable: false,
              children: [
                '/es/v1.x/dashboard/dashboard.md',
              ]
            },
            {
              title: "Búsquedas",
              collapsable: false,
              children: [
                '/es/v1.x/search/search.md',
              ]
            },
            {
              title: "Modos de funcionamientos",
              collapsable: false,
              children: [
                '/es/v1.x/working-modes/working-modes.md',
              ]
            },
            {
              title: "Traducciones",
              collapsable: false,
              children: [
                '/es/v1.x/translations/translations.md',
              ]
            },
            {
              title: "Notificaciones",
              collapsable: false,
              children: [
                '/es/v1.x/notifications/notifications.md',
              ]
            },
            {
              title: "Avanzado",
              collapsable: false,
              children: [
                '/es/v1.x/advanced/conflicts.md',
                '/es/v1.x/advanced/pagination.md',
                '/es/v1.x/advanced/media-manager.md',
                '/es/v1.x/advanced/profile.md',
                '/es/v1.x/advanced/observables.md',
              ]
            },
            {
              title: "Componentes",
              collapsable: false,
              children: [
                '/es/v1.x/components/components.md',
              ]
            },
          ],
        }
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
};
