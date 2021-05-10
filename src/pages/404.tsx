import React from "react";
import KulfiNotFound from "../components/kulfiNotFound";
import Layout from "../components/layout";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";

const MeltedPage = () => {
  const { slogan } = useSiteMetadata();

  return (
    <Layout>
      <Seo title={slogan} />
      <KulfiNotFound />
    </Layout>
  );
};

export default MeltedPage;
