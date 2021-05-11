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
        {/* TODO: Need to figure out what to do with /dynamickulfi/ when entered
        entered directly into browser // TODO: and the flicker that happens when
        redirected by /kulfi/* netlify redirect rule or // or may be avoid
        redirect to this client side routing at all and replace it with a lambda
        function that responds with // an html template */}

        {/* <KulfiMaker path="/*" /> */}

        <KulfiMaker path="/:shortId" />

        {/* // TODO : handle all the rest of the urls from entering into browser
        address e.g. /kulfi/asd/asdasd */}
      </Router>
    </Layout>
  );
};

export default KulfiPage;
