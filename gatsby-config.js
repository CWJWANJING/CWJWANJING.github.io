module.exports = {
  siteMetadata: {
    title: "Wanjing Chen",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
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
        trackingIds: ["UA-168444581-1"],
        pluginConfig: {
          head: true,
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
        icon: `src/images/android-chrome-512x512.png`,
      },
    },
  ],
};