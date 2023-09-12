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
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                path: 'blog',
                blogTitle: 'Blog title',
                blogDescription: 'Blog',
                blogSidebarCount: 5,
                blogSidebarTitle: 'All our posts',
                routeBasePath: 'blog',
                include: ['**/*.{md,mdx}'],
                exclude: [
                    '**/_*.{js,jsx,ts,tsx,md,mdx}',
                    '**/_*/**',
                    '**/*.test.{js,jsx,ts,tsx}',
                    '**/__tests__/**',
                ],
                postsPerPage: 10,
                blogListComponent: '@theme/BlogListPage',
                blogPostComponent: '@theme/BlogPostPage',
                blogTagsListComponent: '@theme/BlogTagsListPage',
                blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                remarkPlugins: [import('remark-math')],
                rehypePlugins: [],
                beforeDefaultRemarkPlugins: [],
                beforeDefaultRehypePlugins: [],
                truncateMarker: /<!--\s*(truncate)\s*-->/,
                showReadingTime: true,
                feedOptions: {
                    type: 'all',
                    title: 'Met\'s Server Blog feed',
                    description: '',
                    copyright: `Copyright © ${new Date().getFullYear()} Met's Server`,
                    language: undefined,
                    createFeedItems: async (params) => {
                        const { blogPosts, defaultCreateFeedItems, ...rest } = params;
                        return defaultCreateFeedItems({
                            // keep only the 10 most recent blog posts in the feed
                            blogPosts: blogPosts.filter((item, index) => index < 10),
                            ...rest,
                        });
                    },
                },
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                fromExtensions: ['html', 'htm', 'md'], // /myPage.html -> /myPage
                toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (存在すれば)
                redirects: [
                    {
                        to: '/terms/list',
                        from: '/terms-index',
                    },
                    {
                        to: '/terms/group',
                        from: '/group',
                    },
                    {
                        to: '/terms/minecraft',
                        from: '/minecraft',
                    },
                    {
                        to: '/terms/community-guideline',
                        from: '/community-guideline',
                    },
                ],
            },
        ],
    ],
    themes: ['@docusaurus/theme-classic'],

    clientModules: [
        require.resolve('./query-scroller.js'),
    ],

    baseUrl: "/",

    title: "Met's Server",
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
            title: 'Met\'s Server',
            logo: {
                alt: 'Logo',
                src: '/img/logo.svg',
                width: 32,
                height: 32,
            },
            items: [
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    to: 'terms/list',
                    label: 'Terms',
                    position: 'left',
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
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Terms',
                            to: 'terms',
                        },
                        {
                            label: 'Minecraft Terms',
                            to: 'terms/minecraft',
                        },
                        {
                            label: 'Community Guideline',
                            to: 'terms/community-guideline',
                        },
                        {
                            label: 'Terms for Groups',
                            to: 'terms/group',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Met\'s Server Logo',
                src: 'img/logo.svg',
                href: 'https://mets-svr.com/',
                width: 32,
                height: 32,
            },
            copyright: `Copyright © ${new Date().getFullYear()} Met's Server`,
        },
    },
}
