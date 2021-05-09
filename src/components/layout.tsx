import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, Divider, Link, Typography } from "@material-ui/core";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
          repo
          author
        }
      }
    }
  `);

  return (
    <>
      <Container maxWidth="md">
        <Header siteMetadata={data.site.siteMetadata} />
        <Box>
          <main>{children}</main>
          <footer>
            <Box mt={5}>
              <Divider />
              <Box mt={1}>
                <Typography>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <Link color="primary" href="https://www.gatsbyjs.com">
                    Gatsby
                  </Link>
                  {", hosted on "}
                  <Link color="primary" href="https://www.gatsbyjs.com">
                    Netlify
                  </Link>
                  {", by "}
                  {data.site.siteMetadata.author}
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
