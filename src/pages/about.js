import PageBanner from "@/components/BannerSection/PageBanner";
import Mission from "@/components/Mission/mission";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterNine from "@/components/MainFooter/FooterNine";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Contact2 = () => {
  return (
    <Layout pageTitle="About">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <Mission />
      <FooterNine />
    </Layout>
  );
};

export default Contact2;
