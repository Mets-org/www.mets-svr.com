module.exports = {
    plugins: [
        [
            "@docusaurus/plugin-content-pages",
            {
                path: "src/pages",
                routeBasePath: "/",
                include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
                exclude: [
                    "**/_*.{js,jsx,ts,tsx,md,mdx}",
                    "**/_*/**",
                    "**/*.test.{js,jsx,ts,tsx}",
                    "**/__tests__/**",
                ],
                mdxPageComponent: "@theme/MDXPage",
            },
        ],
        [
            "@docusaurus/plugin-content-blog",
            {
                path: "blog",
                blogTitle: "ブログ",
                blogDescription: "誰も書かない(泣)",
                blogSidebarCount: 5,
                blogSidebarTitle: "All our posts",
                routeBasePath: "blog",
                include: ["**/*.{md,mdx}"],
                exclude: [
                    "**/_*.{js,jsx,ts,tsx,md,mdx}",
                    "**/_*/**",
                    "**/*.test.{js,jsx,ts,tsx}",
                    "**/__tests__/**",
                ],
                postsPerPage: 10,
                blogListComponent: "@theme/BlogListPage",
                blogPostComponent: "@theme/BlogPostPage",
                blogTagsListComponent: "@theme/BlogTagsListPage",
                blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
                remarkPlugins: [import("remark-math")],
                rehypePlugins: [],
                beforeDefaultRemarkPlugins: [],
                beforeDefaultRehypePlugins: [],
                truncateMarker: /({\/\*|<!--)\s*(truncate|見出し)\s*(\*\/|-->)/,
                showReadingTime: true,
                feedOptions: {
                    type: "all",
                    title: "Met's Server Blog feed",
                    description: "",
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
            "@docusaurus/plugin-client-redirects",
            {
                fromExtensions: ["html", "htm", "md", "mdx"], // /myPage.html -> /myPage
                toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (存在すれば)
                redirects: [
                    {
                        to: "/legal",
                        from: ["/terms-index", "/terms/list"],
                    },
                    {
                        to: "/legal/group",
                        from: ["/group", "/terms/group"],
                    },
                    {
                        to: "/legal/minecraft",
                        from: ["/minecraft", "/terms/minecraft"],
                    },
                    {
                        to: "/legal/community-guideline",
                        from: ["/community-guideline", "/terms/community-guideline"],
                    },
                    {
                        to: "/legal/terms",
                        from: ["/terms"],
                    },
                ],
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                path: "docs",
                breadcrumbs: true,
                editUrl: ({ versionDocsDirPath, docPath }) =>
                    `https://github.com/mets-org/www.mets-svr.com/edit/main/${versionDocsDirPath}/${docPath}`,
                editLocalizedFiles: false,
                editCurrentVersion: false,
                routeBasePath: "docs",
                include: ["**/*.md", "**/*.mdx"],
                exclude: [
                    "**/_*.{js,jsx,ts,tsx,md,mdx}",
                    "**/_*/**",
                    "**/*.test.{js,jsx,ts,tsx}",
                    "**/__tests__/**",
                ],
                docItemComponent: "@theme/DocItem",
                remarkPlugins: [import("remark-math")],
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
    ],
    themes: ["@docusaurus/theme-classic"],

    baseUrl: "/",

    i18n: {
        defaultLocale: "ja",
        locales: ["ja"],
        localeConfigs: {
            ja: {
                htmlLang: "ja",
            },
        },
    },

    title: "Met's Server",
    url: "https://www.mets-svr.com/",

    trailingSlash: false,
    tagline: "Met is so cool!",
    organizationName: "Mets-org",
    projectName: "www.mets-svr.com",
    deploymentBranch: "gh-pages",
    favicon: "img/logo.svg",
    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Met's Server",
            logo: {
                alt: "Logo",
                src: "/img/logo.svg",
                width: 32,
                height: 32,
            },
            items: [
                {
                    to: "blog",
                    label: "Blog",
                    position: "left",
                },
                {
                    to: "legal",
                    label: "Terms",
                    position: "left",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/jG332tPs2D",
                        },
                    ],
                },
                {
                    title: "Social",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/Mets-org",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/mets_server",
                        },
                    ],
                },
                {
                    title: "Legal",
                    items: [
                        {
                            label: "Terms",
                            to: "legal/terms",
                        },
                        {
                            label: "Minecraft Terms",
                            to: "legal/minecraft",
                        },
                        {
                            label: "Community Guideline",
                            to: "legal/community-guideline",
                        },
                        {
                            label: "Terms for Groups",
                            to: "legal/group",
                        },
                    ],
                },
            ],
            logo: {
                alt: "Met's Server Logo",
                src: "img/logo.svg",
                href: "https://mets-svr.com/",
                width: 32,
                height: 32,
            },
            copyright: `Copyright © ${new Date().getFullYear()} Met's Server`,
        },
    },
};
