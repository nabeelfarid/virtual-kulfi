module.exports = {
  siteMetadata: {
    title: `Virtual Kulfi`,
    description: `A place to grab a virtual Kulfi because we all know someone who deserves some sugar.`,
    author: `Nabeel Farid`,
    repo: "https://github.com/nabeelfarid/virtual-kulfi",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Virtual Kulfi`,
        short_name: `Kulfi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
