export const navLinks = [
  { label: "our company", path: "our-company" },
  { label: "locations", path: "locations" },
  { label: "contact", path: "contact" },
];

// src\assets\home\tablet\image-graphic-design.jpg

export const services = [
  {
    title: "web design",
    to: "web-design",
    img: {
      tablet: "/assets/home/tablet/image-web-design.jpg",
      mobile: "/assets/home/mobile/image-web-design.jpg",
      desktop: "/assets/home/desktop/image-web-design-large.jpg",
    },
  },
  {
    title: "app design",
    to: "app-design",
    img: {
      tablet: "/assets/home/tablet/image-app-design.jpg",
      mobile: "/assets/home/mobile/image-app-design.jpg",
      desktop: "/assets/home/desktop/image-app-design.jpg",
    },
  },
  {
    title: "graphic design",
    to: "graphic-design",
    img: {
      tablet: "/assets/home/tablet/image-graphic-design.jpg",
      mobile: "/assets/home/mobile/image-web-design.jpg",
      desktop: "/assets/home/desktop/image-graphic-design.jpg",
    },
  },
];

// src\assets\home\desktop\illustration-resourceful.svg
export const traits = [
  {
    title: "Passionate",
    img: "/assets/home/desktop/illustration-passionate.svg",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    title: "Resourceful",
    img: "/assets/home/desktop/illustration-resourceful.svg",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    title: "Friendly",
    img: "/assets/home/desktop/illustration-friendly.svg",
    text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export const socialsIcon = [
  { icon: "/assets/shared/desktop/icon-facebook.svg" },
  { icon: "/assets/shared/desktop/icon-youtube.svg" },
  { icon: "/assets/shared/desktop/icon-twitter.svg" },
  { icon: "/assets/shared/desktop/icon-pinterest.svg" },
  { icon: "/assets/shared/desktop/icon-instagram.svg" },
];

// public\assets\shared\desktop\illustration-australia.svg

export const locations = [
  {
    country: "Canada",
    image: "/assets/shared/desktop/illustration-canada.svg",
  },
  {
    country: "Australia",
    image: "/assets/shared/desktop/illustration-australia.svg",
  },
  {
    country: "United Kingdom",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
  },
];

export const servicesContent = {
  //WEB DESIGN DATA
  "web-design": {
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",

    projects: [
      {
        title: "EXPRESS",
        subtitle: "A multi-carrier shipping website for ecommerce businesses",

        image: "/assets/web-design/desktop/image-express.jpg",
      },
      {
        title: "TRANSFERT",
        subtitle:
          "Site for low-cost money transfers and sending money within seconds",

        image: "/assets/web-design/desktop/image-transfer.jpg",
      },
      {
        title: "PHOTON",
        subtitle:
          "A state-of-the-art music player with high-resolution audio and DSP effects",

        image: "/assets/web-design/desktop/image-photon.jpg",
      },
      {
        title: "BUILDER",
        subtitle:
          "Connects users with local contractors based on their location",

        image: "/assets/web-design/desktop/image-builder.jpg",
      },
      {
        title: "BLOGR",
        subtitle:
          "Blogr is a platform for creating an online blog or publication",

        image: "/assets/web-design/desktop/image-blogr.jpg",
      },
      {
        title: "Camp",
        subtitle:
          "Get expert training in coding, data, design, and digital marketing",

        image: "/assets/web-design/desktop/image-camp.jpg",
      },
    ],
  },
  //APP DESIGN DATA
  "app-design": {
    title: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",

    projects: [
      {
        title: "AIRFILTER",
        subtitle:
          "Solving the problem of poor indoor air quality by filtering the air",

        image: "/assets/app-design/desktop/image-airfilter.jpg",
      },
      {
        title: "eyecam",
        subtitle:
          "Product that lets you edit your favorite photos and videos at any time",

        image: "/assets/app-design/desktop/image-eyecam.jpg",
      },
      {
        title: "faceit",
        subtitle:
          "Get to meet your favorite internet superstar with the faceit app",

        image: "/assets/app-design/desktop/image-faceit.jpg",
      },
      {
        title: "todo",
        subtitle:
          "A todo app that features cloud sync with light and dark mode",

        image: "/assets/app-design/desktop/image-todo.jpg",
      },
      {
        title: "loopstudios",
        subtitle: "A VR experience app made for Loopstudios",

        image: "/assets/app-design/desktop/image-loopstudios.jpg",
      },
    ],
  },
  //APP DESIGN DATA
  "graphic-design": {
    title: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    // public\assets\graphic-design\desktop\image-boxed-water.jpg
    projects: [
      {
        title: "tim brown",
        subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’",

        image: "/assets/graphic-design/desktop/image-change.jpg",
      },
      {
        title: "boxed water",
        subtitle: "A simple packaging concept made for Boxed Water",

        image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
      },
      {
        title: "science!",
        subtitle: "A poster made in collaboration with the Federal Art Project",

        image: "/assets/graphic-design/desktop/image-science.jpg",
      },
    ],
  },
};

export const localisations = [
  {
    country: "Canada",
    officeName: "Designo Central Office",
    addressLines: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
    // public\assets\locations\tablet\image-map-australia.png
    image: {
      small: "/assets/locations/tablet/image-map-canada.png",
      desktop: "/assets/locations/desktop/image-map-canada.png",
    },
    contact: {
      phone: "+1 253-863-8967",
      email: "contact@designo.co",
    },
  },
  {
    country: "Australia",
    officeName: "Designo AU Office",
    addressLines: ["19 Balonne Street", "New South Wales 2443"],
    image: {
      small: "/assets/locations/tablet/image-map-australia.png",
      desktop: "/assets/locations/desktop/image-map-australia.png",
    },
    contact: {
      phone: "(02) 6720 9092",
      email: "contact@designo.au",
    },
  },
  {
    country: "United Kingdom",
    officeName: "Designo UK Office",
    addressLines: ["13  Colorado Way", "Rhyd-y-fro SA8 9GA"],
    image: {
      small: "/assets/locations/tablet/image-map-australia.png",
      desktop: "/assets/locations/desktop/image-map-australia.png",
    },
    contact: {
      phone: "078 3115 1400",
      email: "contact@designo.uk",
    },
  },
];
