const {
    description
} = require('../package')

module.exports = {
    title: 'OpenCanopy Gallery',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCanopy-Gallery/',

    watch: {
        $page(newPage, oldPage) {
          if (newPage.key !== oldPage.key) {
            requestAnimationFrame(() => {
              if (this.$route.hash) {
                const element = document.getElementById(this.$route.hash.slice(1));

                if (element && element.scrollIntoView) {
                  element.scrollIntoView();
                }
              }
            });
          }
        }
    },

    markdown: {
        extendMarkdown: md => {
          md.use(require('markdown-it-multimd-table'), {
            rowspan: true,
          });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/dortania/OpenCanopy-Gallery',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        logo: 'homepage.png',
        nav: [{
            text: 'Dortania Guides',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Home Site',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'OpenCore Install Guide',
                link: 'https://dortania.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Getting Started With ACPI',
                link: 'https://dortania.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'OpenCore Multiboot',
                link: 'https://dortania.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'GPU Buyers Guide',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduction',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              'prerequisites',
            ]
        },
        {
            title: 'Popular Theme Repos',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              'ocbinary',
              'blackosx',
              'other',
            ]
        },
        {
            title: 'Miscellaneous',
            collapsable: false,
            children: [
              'contribute',
            ]
        },
        {
            title: 'Sources',
            collapsable: false,
            children: [
                ['https://github.com/acidanthera/OpenCorePkg', 'OpenCorePkg'],
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}