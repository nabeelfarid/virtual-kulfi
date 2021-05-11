require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Virtual Kulfi`,
    subtitle: `because we all know someone who deserves some sugar 🍭`,
    slogan: `Virtual Kulfis for all!`,
    description: `A place to grab a virtual Kulfi because we all know someone who deserves some sugar.`,
    author: `Nabeel`,
    repo: "https://github.com/nabeelfarid/virtual-kulfi",
    siteUrl: process.env.SITE_URL,
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
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/dynamickulfi/*`] },
    },
    {
      resolve: `gatsby-source-faunadb`,
      options: {
        secret: process.env.FAUNADB_SECRET,
        index: `kulfis_all`,
        // This is the name under which your data will appear in Gatsby GraphQL queries
        // The following will create queries called `allKulfi` and `kulfi`.
        type: "kulfi",
      },
    },
  ],
};
