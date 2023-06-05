import BannerThree from "@/components/BannerSection/BannerThree";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Style />
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <SearchPopup />
      <BannerThree />
      <CallToSectionTwo />
      <ServicesSectionThree />
      <GetQuoteTwo />
      <MainFooter />
    </Layout>
  );
};

export default Home;
