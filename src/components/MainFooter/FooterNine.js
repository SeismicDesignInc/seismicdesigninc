import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { links, phone, email, address, subscribeText, year, socials } =
  mainFooter;

const FooterNine = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <>
      <footer className="footer-nine">
        <div className="auto-container">
          <Row>
            <Col md={12} lg={4}>
              <div className="footer-nine__widget footer-nine__subscribe">
                <h3 className="footer-nine__widget__title">Newsletter</h3>
                <p className="footer-nine__subscribe__text">{subscribeText}</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <button type="submit" className="footer-nine__subscribe__btn">
                    <span className="fa fa-check"></span>
                  </button>
                </form>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <div className="footer-nine__widget footer-nine__links">
                <Row>
                  <Col md={6} sm={12}>
                    <h3 className="footer-nine__widget__title">Explore</h3>
                    <ul className="list-unstyled footer-nine__links__list">
                      {links.slice(0, 5).map(({ id, href, title }) => (
                        <li key={id}>
                          <Link href={href}>
                            <a href={href}>{title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className="footer-nine__widget footer-nine__contact">
                <h3 className="footer-nine__widget__title">contact</h3>
                <p className="footer-nine__contact__text">{address}</p>
                <ul className="footer-nine__contact__list">
                  <li>
                    <i className="fa fa-envelope"></i>
                    <Link href={`mailto:${email}`}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
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
                  <li>
                    <i className='fab fa-facebook'></i>
                    <Link href={socials[0].href}>
                      <a href={socials[0].href}>Facebook</a>
                    </Link>
                  </li>
                  <li>
                    <i className='fab fa-instagram'></i>
                    <Link href={socials[1].href}>
                      <a href={socials[1].href}>Instagram</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-nine__bottom">
        <div className="auto-container">
          <p className="footer-nine__copyright">
            © Copyright {year} by Seismic Design Inc
          </p>
          <div className="footer-nine__social">
            {socials.map(({ id, icon, href }) => (
              <Link key={id} href={href}>
                <a className={icon}></a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNine;
