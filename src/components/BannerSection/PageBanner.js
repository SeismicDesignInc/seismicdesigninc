// Backgrounds
import services from "@/images/background/image-7.jpg";
import works from "@/images/background/works-bg.jpg";
import team from "@/images/background/team-bg.jpg";
import contact from "@/images/background/contact-bg.jpg";
import portfolio from "@/images/background/portfolio-bg.jpg";


import Link from "next/link";
import React from "react";

const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
  // breadcrumbs
}) => {

  let bg

  bg =
    title === "Services" ? services : title === "Works" ? works : title === "Team Members" ? team : title === "Contact" ? contact : title === "Portfolio" ? portfolio : services;

  return (
    <section className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">
                    <a href="/">Home</a>
                  </Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>
                      <a href={parentHref}>
                        {parent}
                      </a>
                    </Link>

                  </li>
                )}
                <li className="active">{page || title}</li>
                {/* {breadcrumbs && (
                  <li className="active">{breadcrumbs}</li>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default PageBanner;
