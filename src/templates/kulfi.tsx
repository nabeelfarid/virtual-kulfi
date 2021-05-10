import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";
import { Box } from "@material-ui/core";
import KulfiCard from "../components/kulfiCard";

export const query = graphql`
  query($shortId: String!) {
    kulfi(shortId: { eq: $shortId }) {
      shortId
      to
      from
      message
      colorTop
      colorBottom
      colorMiddle
    }
  }
`;

const Kulfi = (props) => {
  const { slogan, siteUrl } = useSiteMetadata();

  console.log(
    "Building Static Page for Kulfi:",
    JSON.stringify(props.data, null, 4)
  );
  return (
    <Layout>
      <Seo title={slogan} />
      <Box mx="auto" textAlign="center">
        <KulfiCard siteUrl={siteUrl} data={props.data.kulfi} />
      </Box>
    </Layout>
  );
};

export default Kulfi;
