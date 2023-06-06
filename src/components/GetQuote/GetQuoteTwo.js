import { getQuoteTwo } from '@/data/getQuote';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
const { title, text, address, email, phone, facebook, instagram } = getQuoteTwo;

const GetQuoteTwo = ({ className = '' }) => {
  return (
    <section className={`get-quote-two ${className}`}>
      <div className='auto-container'>
        <Row className='clearfix'>
          <Col lg={6} md={12} sm={12} className='left-col'>
            <div className='sec-title'>
              <h2>
                {title} <span className='dot'>.</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row className='clearfix'>
          <Col lg={6} md={12} sm={12} className='left-col'>
            <div className='inner'>
              <div className='text'>{text}</div>
              <div className='info'>
                <ul>
                  <li className='address'>
                    <span className='icon flaticon-pin-1'></span>
                    <strong>MAILING ADDRESS</strong>
                    {address}
                  </li>
                  <li>
                    <span className='icon flaticon-email-2'></span>
                    <strong>Email address</strong>
                    <Link href={`mailto:${email}`}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Link>
                  </li>
                  <li>
                    <span className='icon flaticon-call'></span>
                    <strong>Book Now</strong>
                    <Link href='https://calendly.com/seismicdesign/discovery'>
                      <a
                        className='link'
                        href='https://calendly.com/seismicdesign/discovery'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <span className='number'>Book A Free Call</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className='left-col'>
            <div className='inner'>
              <div className='text'>{text}</div>
              <div className='info'>
                <ul>
                  <li>
                    <span className='icon fab fa-facebook d-inline-block align-middle'></span>
                    <Link href={facebook} >
                      <a href={facebook} className="d-inline-block align-middle">
                        <strong>Facebook</strong>
                      </a>
                    </Link>

                  </li>
                  <li>
                    <span className='icon fab fa-instagram d-inline-block align-middle'></span>
                    <Link href={instagram} >
                      <a href={instagram} className="d-inline-block align-middle">
                        <strong>Instagram</strong>
                      </a>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetQuoteTwo;
