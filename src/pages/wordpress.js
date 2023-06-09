import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Wordpress from "@/components/WordpressSection"
import React from "react";


export default function CustomWebsite() {
  return (
    <Layout pageTitle="Wordpress">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Wordpress" />
      <Wordpress />
      <MainFooter />
    </Layout>
  )
}
