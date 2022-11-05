module.exports = {
  siteMetadata: {
    title: "",
    author: `Wanjing Chen`,
    description: `My site description...`,
    siteUrl: `https://cwjwanjing.github.io/`,
    social: [
      {
        name: `instagram`,
        url: `https://www.instagram.com/wanjingchen_/`,
      },
      {
        name: `github`,
        url: `https://github.com/CWJWANJING`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
  ],
}
