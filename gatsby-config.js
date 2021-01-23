module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Hello Gatsuby",
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://qiita.com/kkuzu/feed`,
        name: `Qiita`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `works`,
        path: `${__dirname}/src/works.yaml`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`
  ],
};
