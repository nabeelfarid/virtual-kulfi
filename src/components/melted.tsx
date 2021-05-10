import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import KulfiMelted from "../components/kulfiMelted";
import { Box, Grid, Icon, Typography } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";

const Melted = (props: RouteComponentProps) => {
  return (
    <Box mx="auto" textAlign="center">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <KulfiMelted />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" color="textSecondary">
            Ummm. We don't know. Maybe it melted?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            to="/create"
            endIcon={<Icon>send</Icon>}
          >
            Make a new Kulfi to send to a frend
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Melted;
