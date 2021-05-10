import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import KulfiMeltedSvg from "./kulfiMeltedSvg";
import { Box, Grid, Icon, Typography } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";

const KulfiNotFound = (props: RouteComponentProps) => {
  return (
    <Box mx="auto" textAlign="center">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <KulfiMeltedSvg />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" color="textSecondary">
            Ummm. We don't know. Maybe it melted?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            to="/create"
            endIcon={<Icon>send</Icon>}
          >
            Prepare a new Kulfi to send to a frend
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KulfiNotFound;
