import * as React from "react";
import { Router, useParams, RouteComponentProps } from "@reach/router";
import Layout from "./layout";
import Seo from "./seo";
import KulfiSvg from "./kulfiSvg";
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
  Divider,
} from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";
import { LockOpen } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { navigate } from "gatsby";
import { gql, useQuery } from "@apollo/client";
import KulfiNotFound from "./kulfiNotFound";
import useSiteMetadata from "../hooks/useSiteMetaData";
import { Link } from "gatsby-theme-material-ui";
import KulfiCard from "./kulfiCard";

interface KulfiMakerProps extends RouteComponentProps {
  shortId?: string;
}

const GET_KULFI_BY_SHORTID = gql`
  query GetKulfiByShortId($shortId: String!) {
    getKulfiByShortId(shortId: $shortId) {
      id
      colorTop
      colorMiddle
      colorBottom
      to
      from
      message
      shortId
    }
  }
`;

const KulfiMaker: React.FC<KulfiMakerProps> = (props) => {
  const theme = useTheme();
  const { siteUrl } = useSiteMetadata();
  const { loading, error, data } = useQuery(GET_KULFI_BY_SHORTID, {
    variables: {
      shortId: props.shortId,
    },
    skip: !props.shortId,
  });

  if (error || !props.shortId) {
    return <KulfiNotFound />;
  }
  return (
    <>
      <Box mx="auto" textAlign="center">
        {loading && (
          <div>
            <CircularProgress color="secondary" />
          </div>
        )}
        {data && (
          <>
            <KulfiCard siteUrl={siteUrl} data={data.getKulfiByShortId} />
          </>
        )}
      </Box>
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
    </>
  );
};

export default KulfiMaker;
