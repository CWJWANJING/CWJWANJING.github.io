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
  ],
  mapping: {
    "markdownRemark.frontmatter.image": `file.name`
  },
}
