import { mission1, mission2 } from '@/data/featuresSection';
import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const { image, title, text } = mission1;

const { image: img, title: tit, text: txt } = mission2;

const FeatureEight = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className='feature-eight'>
      <div className='auto-container'>
        <div className='sec-title'>
          <h2>
            Our Mission <span className='dot'>.</span>
          </h2>
        </div>
        <Row style={{ marginBottom: '3rem' }}>
          <Col md={12} lg={5}>
            <div className='feature-eight__image'>
              <Image src={image.src} alt='' />
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className='feature-eight__content'>
              <div className='sec-title'>
                <h4>
                  {title} <span className='dot'>.</span>
                </h4>
              </div>
              <p
                className='feature-eight__text'
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={7}>
            <div className='feature-eight__content' style={{ marginTop: '100px'}}>
              <div className='sec-title'>
                <h4>
                  {tit} <span className='dot'>.</span>
                </h4>
              </div>
              <p
                className='feature-eight__text'
                dangerouslySetInnerHTML={{ __html: txt }}
              ></p>
            </div>
          </Col>
          <Col md={12} lg={5}>
            <div className='feature-eight__image'>
              <Image style={{ marginLeft: '-200px' }} src={img.src} alt='' />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeatureEight;
