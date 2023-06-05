import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import FullStack from "@/components/FullStackSection"
import React from "react";


export default function CustomWebsite() {
  return (
    <Layout pageTitle="The Power of Full Stack Web Design Coding: Unleashing the Benefits">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="The Power of Full Stack Web Design Coding: Unleashing the Benefits" />
      <FullStack />
      <MainFooter />
    </Layout>
  )
}
