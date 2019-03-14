module.exports = {
  siteName: `1q87`,
  titleTemplate: `%s - ChangJoo Park`,
  siteUrl: 'changjoo-park.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'article/*.md',
        typeName: 'BlogPost',
        route: '/article/:year/:month/:day/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            'gridsome-plugin-remark-twitter'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-86239620-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.js'
      }
    },
  ]
}
