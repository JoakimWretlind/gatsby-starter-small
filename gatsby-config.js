module.exports = {
  siteMetadata: {
    title: `Gatsby Boilerplate`,
    description: `Boilerplate to get your Gatsby up and running inno time.`,
    author: `Joakim Wretlind`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
