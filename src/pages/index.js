import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Kulfi from "../components/kulfi";
import { Box, Grid, Typography, useTheme } from "@material-ui/core";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import { Button } from "gatsby-material-ui-components";
import { getRandomColor } from "../utils/index";
// markup
const IndexPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Seo title="Home" />
      <Box maxWidth={600} mx="auto">
        <Grid container>
          <Grid item sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item sm={3}>
            <Kulfi height="300" />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
