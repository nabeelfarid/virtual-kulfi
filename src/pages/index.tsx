import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import KulfiSvg from "../components/kulfiSvg";
import { Box, Grid, Icon } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";
import { getRandomColor } from "../utils/index";
import useSiteMetadata from "../hooks/useSiteMetaData";
// markup
const IndexPage = () => {
  const { slogan } = useSiteMetadata();
  return (
    <Layout>
      <Seo title={slogan} />
      <Box maxWidth={600} mx="auto" textAlign="center">
        <Grid container>
          <Grid item xs={6} sm={3}>
            <KulfiSvg
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <KulfiSvg
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <KulfiSvg
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <KulfiSvg height="300" />
          </Grid>
          <Grid item xs={12}>
            <Box my={2} mx="auto" maxWidth={300}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                to="/create"
                endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
