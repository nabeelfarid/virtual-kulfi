import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, Divider, Link, Typography } from "@material-ui/core";
import Header from "./header";
import useSiteMetadata from "../hooks/useSiteMetaData";

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Container maxWidth="md">
        <Header siteMetadata={siteMetadata} />
        <Box>
          <main>{children}</main>
          <footer>
            <Box mt={5} textAlign="center">
              <Divider />
              <Box mt={1}>
                <Typography>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <Link color="primary" href="https://www.gatsbyjs.com">
                    Gatsby
                  </Link>
                </Typography>
                <Typography>
                  {"Powered by "}
                  <Link color="primary" href="https://material-ui.com/">
                    Material-UI
                  </Link>
                  {", "}
                  <Link
                    color="primary"
                    href="https://www.netlify.com/products/functions/"
                  >
                    Lambda Functions
                  </Link>
                  {", "}
                  <Link color="primary" href="https://graphql.org/">
                    GraphQL
                  </Link>
                  {" and "}
                  <Link color="primary" href="https://fauna.com/">
                    Fauna DB
                  </Link>
                  {"."}
                </Typography>
                <Typography>
                  {"Hosted on "}
                  <Link color="primary" href="https://www.netlify.com/">
                    Netlify
                  </Link>
                  {", written by "}
                  {siteMetadata.author}
                  {", inspired by Phil Hawksworth's "}
                  <Link
                    color="primary"
                    href="https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/"
                  >
                    post
                  </Link>
                </Typography>
              </Box>
            </Box>
          </footer>
        </Box>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
