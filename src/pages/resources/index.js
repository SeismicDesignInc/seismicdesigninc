import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import BlogLists from "@/components/BlogSection/BlogLists";
import { BlogData } from "@/data/blogSection"
export default function Blog2() {
  return (
    <Layout pageTitle="Resources">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Resources" />
      <BlogLists data={BlogData} />
      <MainFooter />
    </Layout>
  )
}
