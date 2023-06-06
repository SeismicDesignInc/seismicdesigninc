import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/White.png";

export const footer = { year: new Date().getFullYear(), author: "Linoor" };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "With Seismic Design",
  templateLink: "#",
};

const home = {
  id: 1,
  title: 'Home',
  href: '/',
};

export const mainFooter = {
  logo,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Marketing So Good, It shakes the Earth",
  address: "20791 3 Oaks Pkwy Unit 594 Estero, FL 33929",
  address3: "66 Mark Street, New Town DC 5752, Lo New York",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "(804) 505-5551",
  phone2: "+92 3333 222 000",
  email: "Alex@seismicdesigninc.com",
  textBottom:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "https://www.facebook.com/seismicdesigninc/",
      icon: "fab fa-facebook-square",
    },

    {
      id: 3,
      href: "https://www.instagram.com/seismicdesigninc/",
      icon: "fab fa-instagram",
    },

  ],

  links: [
    home,
    {
      id: 2,
      title: 'Our Services',
      href: 'services',

    },
    {
      id: 4,
      title: 'The Team',
      href: 'team',
    },
    {
      id: 5,
      title: 'blogs',
      href: 'blogs',
    },
    {
      id: 6,
      title: 'Our Work',
      href: 'our-work',
    },
    {
      id: 7,
      title: 'About',
      href: 'about',
    }
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
