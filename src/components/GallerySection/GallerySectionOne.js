import { gallerySectionOne, items3 } from "@/data/gallerySection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React, { useState } from "react";
import Masonry from "react-masonry-component";
import GalleryItem from "./GalleryItem";

const masonryOptions = {
  transitionDuration: 500,
};

const { title, tabBtns, items } = gallerySectionOne;

const getCurrentItems = (current = "") =>
  items.filter((it) => it.filter.includes(current));

const getCount = (current = "") => getCurrentItems(current).length;

const GallerySectionOne = ({ corevalue = false, similar = false }) => {
  const [current, setCurrent] = useState("all");
  const currentItems = getCurrentItems(current);
  const ref = useActive("#corevalue");

  return (
    <section
      ref={ref}
      className={`gallery-section${similar ? " similar-gallery" : ""}`}
      id="corevalue"
    >
      <div className="auto-container">
        <div className="mixitup-gallery">
          {/* <div className={corevalue || similar ? "" : "upper-row clearfix"}>
            {!corevalue && (
              <div className={`sec-title${similar ? " centered" : ""}`}>
                <h2>
                  {similar ? "Similar work " : title}
                  <span className="dot">.</span>
                </h2>
              </div>
            )}
            {!similar && (
              <div
                className={`filters clearfix${corevalue ? " centered" : ""}`}
              >
                <ul className="filter-tabs filter-btns clearfix">
                  {tabBtns.map(({ id, name, tab }) => (
                    <li
                      onClick={() => setCurrent(tab)}
                      key={id}
                      className={`${current === tab ? "active " : ""}filter`}
                      data-role="button"
                    >
                      {name}
                      <sup>[{getCount(tab)}]</sup>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
          <Masonry
            options={masonryOptions}
            className="row position-relative filter-list"
          >
            {items3.map((item) => (
              <GalleryItem item={item} key={item.id} />
            ))}
          </Masonry>
          {corevalue && (
            <div className="more-box">
              <Link href="/corevalue">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Load more work</span>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySectionOne;
