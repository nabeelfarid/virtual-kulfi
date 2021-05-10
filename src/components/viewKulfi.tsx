import * as React from "react";
import { Router, useParams, RouteComponentProps } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Kulfi from "../components/kulfi";
import {
  Box,
  Grid,
  useTheme,
  Icon,
  Card,
  Typography,
  Avatar,
  CardHeader,
  CardContent,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";
import { LockOpen } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { navigate } from "gatsby";
import { gql, useMutation } from "@apollo/client";

const ViewKulfi = (props: RouteComponentProps) => {
  const params = useParams();

  const [colorTop, setColorTop] = React.useState("#d52358");
  const [colorMiddle, setColorMiddle] = React.useState("#e95946");
  const [colorBottom, setColorBottom] = React.useState("#deaa43");
  return (
    <Box mx="auto" textAlign="center">
      <Grid container>
        <Grid item xs={6} sm={3}>
          <Kulfi
            height={350}
            colorTop={colorTop}
            colorMiddle={colorMiddle}
            colorBottom={colorBottom}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card variant="elevation">
            <CardContent>Kulfi {params.shortId}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewKulfi;
