import React from 'react';
import { Col } from 'react-bootstrap';
import TextSplit from '../Reuseable/TextSplit';
import Link from "next/link";

const SingleService = ({ service = {} }) => {
  const { icon, title, text } = service;

  // truncate text
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      for (let i = limit; i > 0; i--) {
        if (text.charAt(i) === ' ') {
          return `${text.substring(0, i)}...`;
        }
      }
    }
    return text;
  };

  return (
    <Col xl={3} lg={6} md={6} sm={12} className='service-block-two'>
      <div className='inner-box animated fadeInUp'>
        <div className='bottom-curve'></div>
        <div className='icon-box'>
          <span className={icon}></span>
        </div>
        <h5>
          <Link href='/services'>
            <a href='/services'>
              <TextSplit text={title} />
            </a>
          </Link>
        </h5>
        <div className='link-box'>
          <Link href='/services'>
            <a href='/services'>
              <span className='fa fa-angle-right'></span>
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
