import { serviceNine } from '@/data/servicesSection';
import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';

const ServiceNine = () => {
  useEffect(() => {
    // Check if URL contains a hash (#) and scroll to the target element
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      }
    }
  }, []);

  return (
    <section className='service-nine'>
      <div className='auto-container'>
        <Row style={{ marginBottom: '1rem' }}>
          <Col lg={12} md={12} sm={12}>
            <div className='sec-title' style={{ textAlign: 'center' }}>
              <p>
                Seismic Design Inc. is a full service web development, graphic
                design, and digital marketing firm. We have had the opportunity
                to serve clients in nearly every sector from the healthcare
                industry, charities, automotive & marine industry and everything
                in between. Our incredible team of in-house developers and
                designers are eager to create custom, tailored solutions to
                every request and need your business may have. Need a lightning
                fast website - we've got you! One-of-a-kind mobile app - no
                problem! Custom product label or vehicle wrap to increase sales
                and drive revenue to your organization - thought you'd never
                ask! It's simple - our marketing is SO good it SHAKES the EARTH!
              </p>
            </div>
          </Col>
        </Row>
        {serviceNine.map(({ id, title, href, image, text }, i) =>
          i % 2 === 0 ? (
            <Row key={id} style={{ marginBottom: '4rem' }}>
              <div id={href}></div>
              <Col lg={4} md={12} sm={12} className='service-img'>
                <div className='image'>
                  <Image
                    src={require(`@/images/services/${image}`).default.src}
                    alt=''
                  />
                </div>
              </Col>
              <Col lg={8} md={12} sm={12}>
                <div className='sec-title' style={{ marginBottom: '10px' }}>
                  <h2>
                    {title} <span className='dot'>.</span>
                  </h2>
                </div>
                <p>
                  {text}
                  {title === 'Custom Websites' && (
                    <>
                      {" "}
                      <Link href="/resources/seismic-design-inc-about-our-amazing-websites">
                        <a href="/resources/seismic-design-inc-about-our-amazing-websites">Learn more</a>
                      </Link>
                    </>
                  )}
                </p>
                {i === 0 ? (
                  <ul>
                    <li>
                      <strong>i. Full Stack</strong> - We offer a wide range of
                      full stack development services, including front-end
                      development, back-end development, database design and
                      optimization, Payment gateway and API integration.
                      {" "}
                      <Link href="/resources/seismic-design-the-power-of-full-stack-web-design-coding-unleashing-the-benefits">
                        <a href="/resources/seismic-design-the-power-of-full-stack-web-design-coding-unleashing-the-benefits">Learn more</a>
                      </Link>
                    </li>
                    <li>
                      <strong>ii. Wordpress</strong> - We provide WordPress
                      services, including WordPress website design and
                      development, custom plugin development, theme
                      customization, website migration, website maintenance and
                      support, and more.
                      {" "}
                      <Link href="/resources/transform-your-business-with-a-stunning-custom-website-today">
                        <a href="/resources/transform-your-business-with-a-stunning-custom-website-today">Learn more</a>
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </Col>
            </Row>
          ) : (
            <Row key={id} style={{ marginBottom: '2rem' }}>
              <div id={href}></div>
              <Col lg={8} md={12} sm={12}>
                <div className='sec-title' style={{ marginBottom: '10px' }}>
                  <h2>
                    {title} <span className='dot'>.</span>
                  </h2>
                </div>
                <p>{text}</p>
                {i === 3 ? (
                  <ul>
                    <li>
                      <strong>i. Search Engine Optimization</strong> - Our SEO
                      services, includes keyword research, on-page optimization,
                      technical SEO, content optimization, link building, and
                      local SEO. We specialize in helping businesses improve
                      their online visibility and ranking on search engines such
                      as Google, Bing, and Yahoo.
                      {" "}
                      <Link href="/resources/seismic-design-seo-services-amplify-your-digital-presence">
                        <a href="/resources/seismic-design-seo-services-amplify-your-digital-presence">Learn more</a>
                      </Link>
                    </li>
                    <li>
                      <strong>ii. Social Media Management</strong> - We are
                      committed in helping businesses build and maintain a
                      strong social media presence by doing social media content
                      creation, community management, social media advertising,
                      and social media analytics.
                    </li>
                  </ul>
                ) : null}
              </Col>
              <Col lg={4} md={12} sm={12} className='service-img'>
                <div className='image'>
                  <Image
                    src={require(`@/images/services/${image}`).default.src}
                    alt=''
                  />
                </div>
              </Col>
            </Row>
          )
        )}
      </div>
    </section >
  );
};

export default ServiceNine;
