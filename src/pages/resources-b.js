import PageBanner from "@/components/BannerSection/PageBanner";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const corevalue = () => {
  return (
    <Layout pageTitle="corevalue">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="blogs" />
      <GallerySectionOne />
      <MainFooter />
    </Layout>
  );
};

export default corevalue;
