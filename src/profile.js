// import mongodb from "./images/mongodb.svg";

// Changes website animations
const animation = {
  // switches off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const background = {

  type: "Particle",
};

const skillsBar = [
  {
    name: "HTML5",
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "npm",
    faClass: "fab fa-npm",
  },
  {
    name: "git",
    faClass: "fab fa-git-alt",
  },

];

const section3Title = "Projects";
const projects = [
  {
    id: "project1",
    name: "ChargeBuddy",
    about: "This app provides geoloaction to locate the user as well as charging stations for Electric Vehicles nearby. The user Registers their information with the application including their cars charging port and it is stored in a database. When they log back in that information and all nearby charging stations are displayed in a map on their homepage.",
    skills: ["Tech: React, Node.js, Express, MongoDB, Materialize, Mapbox API"],
    url: "https://github.com/spclk/ChargeBuddy",
  },
  {
    id: "project2",
    name: "Projectimator",
    about: "Provides an online service for Homeowners to locate contractors that are able to work within a specified budget.",
    skills: ["Tech: Handlebars.js, Node.js, Express, MySQL, Nodemailer"],
    url: "https://github.com/spclk/Projectimator",
  },
  {
    id: "project3",
    name: "Cryptelligent",
    about: "App for new investors who wish to learn more about the world of cryptocurrency. CoinGecko and Bloomberg APIs are utilized to provide the cryptocurrency information.",
    skills: ["Tech: JS, jQuery, Materialize, CoinGecko API, Bloomberg API"],
    url: "https://github.com/spclk/Cryptelligent",
  },
  {
    id: "project4",
    name: "Weather Dashborad",
    about: "imple weather app that allows you to check for current weather conditions and a 5-day forecast. It retrieves weather data for cities using the OpenWeather APIs. Searching for multiple cities will give you a clickable search history list you can use to retrieve weather for those cities again.",
    skills: ["Tech: HTML, CSS, JS, Materialize, Moment.js, OpenWeather API"],
    url: "https://github.com/spclk/weather-dashboard",
  },
];

const section5Title = "Gontact Me";
const contact = {
  pitch:
    "I'd love to hear from you whether you have a question to ask, have a project to collaberate on, or just want to say Hi 👋 ",
  copyright: "Konstantin Alekseev",
  contactUrl: "",
};

const social = {
  github: "https://github.com/spclk",
  linkedin: "https://www.linkedin.com/in/-konstantin/",
  resume: "https://novoresume.com/",
};

export {
  animation,
  background,
  skillsBar,
  projects,
  contact,
  social,
  section3Title,
  section5Title,
};
