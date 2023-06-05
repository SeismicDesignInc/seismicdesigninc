import { useRootContext } from '@/context/context';
// react router
import { useRouter } from 'next/router';
import headerData from '@/data/header';
import useScroll from '@/hooks/useScroll';
import Link from 'next/link';
import React from 'react';
import { Image } from 'react-bootstrap';
import NavItem from './NavItem';

const { title, Black, White, title2, navItems, navItemsTwo, phone, socials } =
  headerData;

const HeaderOne = ({
  headerStyle = 'header-style-one',
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch } = useRootContext();
  const newNavItems = onePage ? navItemsTwo : navItems;
  let Logo;
  let logo1 = Black;
  let logo2 = White;
  let exempted = ['services', 'works', 'team', 'resources', 'about'];

  // check the name of the page
  const router = useRouter();
  const { pathname } = router;
  const splitPath = pathname.split('/');
  const pageName = splitPath[splitPath.length - 1];

  if (scrollTop) {
    Logo = logo2;
  } else {
    if (exempted.includes(pageName)) Logo = logo2;
    else Logo = logo1;
  }

  return (
    <header
      className={`main-header${scrollTop ? ' fixed-header' : ''
        } ${headerStyle}`}
    >
      {topBar && (
        <div className='topbar-four'>
          <div className='auto-container'>
            <p>{title2}</p>
            <div className='right-content'>
              <div className='phone'>
                <span className='icon flaticon-call'></span>
                <Link href="https://calendly.com/seismicdesign/discovery">
                  <a
                    className=''
                    href='https://calendly.com/seismicdesign/discovery'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Book A Free Call
                  </a>
                </Link>
              </div>
              <ul className='list-unstyled social-links'>
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className='header-upper'>
        <div className={autoContainer ? 'inner-container clearfix' : ''}>
          <div
            className={
              autoContainer ? 'auto-container' : 'inner-container clearfix'
            }
          >
            <div className='logo-box'>
              <div className='logo'>
                <Link href='/'>
                  <a title={title}>
                    <Image
                      id='thm-logo'
                      src={Logo.src}
                      alt={title}
                      title={title}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='nav-outer clearfix'>
              <div onClick={toggleMenu} className='mobile-nav-toggler'>
                <span className='icon flaticon-menu-2'></span>
                <span className='txt'>Menu</span>
              </div>

              <nav className='main-menu navbar-expand-md navbar-light'>
                <div
                  className={
                    autoContainer
                      ? ''
                      : 'collapse navbar-collapse show clearfix'
                  }
                  id={autoContainer ? '' : 'navbarSupportedContent'}
                >
                  <ul className='navigation clearfix'>
                    {newNavItems.map((navItem) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {links && (
              <div className='other-links clearfix'>
                <div className='link-box'>
                  <div className='call-us'>
                    <Link href="https://calendly.com/seismicdesign/discovery">
                      <a
                        className='link'
                        href='https://calendly.com/seismicdesign/discovery'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <span className='icon'></span>
                        <span className='sub-text' style={{ marginBottom: '8px' }}></span>
                        <span className='number'>Book A Free Call</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className='right-menu'>
                <div className='search-btn'>
                  <button
                    onClick={toggleSearch}
                    type='button'
                    className='theme-btn search-toggler'
                  >
                    <span className='flaticon-loupe'></span>
                  </button>
                </div>
                <div onClick={toggleMenu} className='mobile-nav-toggler'>
                  <span className='bar'></span>
                  <span className='bar'></span>
                  <span className='bar'></span>
                  <span className='txt'>Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
