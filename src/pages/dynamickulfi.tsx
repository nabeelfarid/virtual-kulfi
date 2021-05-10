import * as React from "react";
import { Router, Redirect } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ViewKulfi from "../components/viewKulfi";
import Melted from "../components/melted";

// markup
const KulfiPage = () => {
  return (
    <Layout>
      <Seo title="Virtual Kulfis for all!" />
      <Router basepath="/dynamickulfi">
        <ViewKulfi path="/:shortId" />
        <Melted default />
      </Router>
    </Layout>
  );
};

export default KulfiPage;
