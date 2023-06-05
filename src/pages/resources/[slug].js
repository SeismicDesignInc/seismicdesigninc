import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import { BlogData } from "@/data/blogSection";
import Error from "next/error";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = BlogData.find((post) => post.slug === slug);

    if (foundPost) {
      setPost(foundPost);
    }
  }, [slug]);


  if (!post) {
    return (
      <Layout pageTitle="Resources">
        <Style />
        <HeaderOne />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Resources" breadcrumbs="" />
        <div className="container my-5 text-center">
          <h2>Sorry, We Can't Find That Resources!</h2>
          <Link href="/resources">
            <a className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Back to Resources</span>
            </a>
          </Link>
        </div>
        <MainFooter />
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Resources">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title={post.title} breadcrumbs={post.title} />
      <div className="container my-5 blog-single">
        {/* <h3>{post.title}</h3> */}
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BlogPostPage;
