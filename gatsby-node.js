/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allKulfi {
        edges {
          node {
            shortId
          }
        }
      }
    }
  `);
  console.log("response", JSON.stringify(response, null, 4));
  response.data.allKulfi.edges.forEach((edge) => {
    console.log("creating page", edge.node.shortId);

    createPage({
      path: `/kulfi/${edge.node.shortId}`,
      component: path.resolve("./src/templates/kulfi.tsx"),
      context: {
        shortId: edge.node.shortId,
      },
    });
  });
};
