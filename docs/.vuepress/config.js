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
    ['link', {rel: 'icon', href: '/assets/img/icon.png'}],
  ],
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    repo: 'sertxudeveloper/Lyra',
    docsRepo: 'sertxudeveloper/Lyra-website',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    displayAllHeaders: true,
    sidebarDepth: 2,
    smoothScroll: true,
    searchPlaceholder: 'Search...',
    markdown: {
      lineNumbers: true
    },
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Home',
            link: 'https://lyra.sertxudeveloper.com',
            target: '_self'
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
              title: "Introduction",
              collapsable: false,
              children: [
                '/en/v1.x/welcome.md',
                '/en/v1.x/introduction/support-policy.md',
                '/en/v1.x/introduction/upgrade-guide.md',
                '/en/v1.x/introduction/contributions.md',
              ]
            },
            {
              title: "Getting Started",
              collapsable: false,
              children: [
                '/en/v1.x/getting-started/installation.md',
                '/en/v1.x/getting-started/getting-started.md',
              ]
            },
            {
              title: "Fields",
              collapsable: false,
              children: [
                '/en/v1.x/fields/defining.md',
                '/en/v1.x/fields/functionalities.md',
                '/en/v1.x/fields/types.md',
                '/en/v1.x/fields/relations.md',
              ]
            },
            {
              title: "Dashboard",
              collapsable: false,
              children: [
                '/en/v1.x/dashboard/dashboard.md',
              ]
            },
            {
              title: "Search",
              collapsable: false,
              children: [
                '/en/v1.x/search/search.md',
              ]
            },
            {
              title: "Working modes",
              collapsable: false,
              children: [
                '/en/v1.x/working-modes/working-modes.md',
              ]
            },
            {
              title: "Translations",
              collapsable: false,
              children: [
                '/en/v1.x/translations/translations.md',
              ]
            },
            {
              title: "Notifications",
              collapsable: false,
              children: [
                '/en/v1.x/notifications/notifications.md',
              ]
            },
            {
              title: "Advanced",
              collapsable: false,
              children: [
                '/en/v1.x/advanced/conflicts.md',
                '/en/v1.x/advanced/menu-configuration.md',
                '/en/v1.x/advanced/pagination.md',
                '/en/v1.x/advanced/media-manager.md',
                '/en/v1.x/advanced/profile.md',
                '/en/v1.x/advanced/observables.md',
              ]
            },
            {
              title: "Components",
              collapsable: false,
              children: [
                '/en/v1.x/components/components.md',
              ]
            },
          ],
        }
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Inicio',
            link: 'https://lyra.sertxudeveloper.com',
            target: '_self'
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
                '/es/v1.x/advanced/menu-configuration.md',
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
  plugins: [
    ['@vuepress/back-to-top', true],
  ],
};
