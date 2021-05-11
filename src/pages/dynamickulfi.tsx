import * as React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import KulfiMaker from "../components/kulfiMaker";
import KulfiNotFound from "../components/kulfiNotFound";
import useSiteMetadata from "../hooks/useSiteMetaData";

// markup
const KulfiPage = () => {
  const { slogan } = useSiteMetadata();

  return (
    <Layout>
      <Seo title={slogan} />
      <Router basepath="/dynamickulfi">
        <KulfiMaker path="/*" />
        <KulfiMaker path="/:shortId" />
      </Router>
    </Layout>
  );
};

export default KulfiPage;
