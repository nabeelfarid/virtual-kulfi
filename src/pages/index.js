import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Kulfi from "../components/kulfi";
import { Box, Grid, useTheme, Icon } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";
import { getRandomColor } from "../utils/index";
// markup
const IndexPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Seo title="Virtual Kulfis for all!" />
      <Box maxWidth={600} mx="auto" textAlign="center">
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Kulfi
              height="300"
              colorTop={getRandomColor()}
              colorBottom={getRandomColor()}
              colorMiddle={getRandomColor()}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Kulfi height="300" />
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
