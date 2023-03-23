module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-pages',
            {
                path: 'src/pages',
                routeBasePath: '/',
                include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
                exclude: [
                    '**/_*.{js,jsx,ts,tsx,md,mdx}',
                    '**/_*/**',
                    '**/*.test.{js,jsx,ts,tsx}',
                    '**/__tests__/**',
                ],
                mdxPageComponent: '@theme/MDXPage',
            }
        ]
    ],
    themes: ['@docusaurus/theme-classic'],

    baseUrl: "/",

    title: "Met's Server Terms",
    url: "https://www.mets-svr.com/",

    trailingSlash: false,
    tagline: "Met is so cool!",
    organizationName: "Mets-org",
    projectName: "www.mets-svr.com",
    deploymentBranch: "gh-pages",
    favicon: 'img/logo.svg',
    themeConfig: {

        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Met\'s Server Terms',
            logo: {
                alt: 'Logo',
                src: '/img/logo.svg',
                width: 32,
                height: 32,
            },
            items: [
                {
                    to: 'terms',
                    label: '利用規約',
                    position: 'left',
                },
                {
                    to: 'community-guideline',
                    label: 'コミュニティガイドライン',
                    position: 'left',
                },
                {
                    to: 'minecraft',
                    label: 'マインクラフトサーバー利用規約',
                    position: 'left',
                },
                {
                    href: "https://mets-svr.com/",
                    label: "公式ページ",
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: "https://discord.gg/jG332tPs2D",
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Mets-org'
                        },
                        {
                            label: 'Twitter',
                            href: "https://twitter.com/mets_server",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Met's Server`,
        },
    },
}