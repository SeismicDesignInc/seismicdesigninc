import icon from '@/images/icons/close-1-1.png';
import Black from '@/images/Black.png';
import White from '@/images/White.png';

const home = {
  id: 1,
  name: 'Home',
  href: '/',
};

const navItemsTwo = [
  { ...home, href: '#home' },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Services',
    href: 'services',
  },
  {
    id: 4,
    name: 'Resources',
    href: 'resources',
  },
  
  {
    id: 5,
    name: 'Team',
    href: '#team',
  },
  {
    id: 6,
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    id: 7,
    name: 'Blog',
    href: '#blog',
  },
  {
    id: 8,
    name: 'Contact',
    href: '#contact',
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: 'Our Services',
    href: 'services',
    subNavItems: [
      { id: 1, name: 'Custom Websites', href: 'services#custom-website' },
      { id: 2, name: 'Mobile App Development', href: 'services#mobile-app-development' },
      { id: 3, name: 'Custom Branding', href: 'services#custom-branding' },
      { id: 4, name: 'Digital Marketing', href: 'services#digital-marketing' },
    ],
  },
  {
    id: 4,
    name: 'The Team',
    href: 'team',
  },
  {
    id: 5,
    name: 'Resources',
    href: 'resources',
  },
  {
    id: 6,
    name: 'Our Work',
    href: 'our-work',
  },
  {
    id: 7,
    name: 'About',
    href: 'about',
  },
];

export const socials = [
  {
    id: 1,
    icon: 'fab fa-facebook-square',
    href: 'https://www.facebook.com/seismicdesigninc/',
  },

  {
    id: 3,
    icon: 'fab fa-instagram',
    href: 'https://www.instagram.com/seismicdesigninc/',
  },
];

const headerData = {
  title: 'Seismic Designs Inc, USA',
  title2: 'Welcome to Creative Buinsess Agency.',
  title3: 'Welcome to Amazing Consulting Agency.',
  Black,
  White,
  navItems,
  navItemsTwo,
  address: 'Suite 20 Golden Street USA',
  phone: '(804)505-5551',
  email: '20791 3 Oaks Pkwy Unit 594 Estero, FL 33929',
  icon,
  socials,
  text: 'Seismic Designs Inc, USA',
};

export default headerData;
