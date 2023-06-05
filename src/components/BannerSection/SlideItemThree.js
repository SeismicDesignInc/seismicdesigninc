import Link from "next/link";
import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItemThree = ({ slide = {} }, ref) => {
  const { bg, title, text } = slide;

  return (
    <div style={{ userSelect: "none" }} ref={ref} className="slide-item">
      <div className="round-shape-1"></div>
      <div className="round-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`@/images/main-slider/${bg}`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h1>
                <TextSplit text={title} />
              </h1>
              <div className="text">{text}</div>
              <div className="link-box">
                <a className="theme-btn btn-style-two" href="https://calendly.com/seismicdesign/discovery" target="_blank" rel="noopener noreferrer">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Book A Free Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemThree);
