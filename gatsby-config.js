module.exports = {
  siteMetadata: {
    title: "",
    author: `Wanjing Chen`,
    description: `My site description...`,
    siteUrl: `https://cwjwanjing.github.io/`,
    social: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/wanjingchen/`,
      },
      {
        name: `Github`,
        url: `https://github.com/CWJWANJING`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/wanjingchen_/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/projects`,
        name: `content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images`,
        name: `src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-168444581-1", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wanjing Chen`,
        short_name: `CWJ`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FBEDE0`,
        display: `standalone`,
        cache_busting_mode: `query`,
        icon: `src/images/android-chrome-512x512.png`,
        icons: [
          {
            src: `src/images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      }
    }
  ],
  mapping: {
    "MarkdownRemark.frontmatter.image": `File.name`
  },
}
