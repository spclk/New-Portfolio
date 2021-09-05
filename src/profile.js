const animation = {
  animate: true,
  duration: 750,
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
    name: "Databases",
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
    about: "App that uses geolocation to allow users to find nearby charging stations for Electric Vehicles.",
    skills: ["Tech: React, Node.js, Express, MongoDB, Materialize, Mapbox API"],
    url: "https://github.com/spclk/ChargeBuddy",
    deployed: "https://shielded-atoll-36831.herokuapp.com/",
  },
  {
    id: "project2",
    name: "Projectimator",
    about: "Online service to connect homeowners with contractors for house repair projects.",
    skills: ["Tech: Handlebars.js, Node.js, Express, MySQL, Nodemailer"],
    url: "https://github.com/spclk/Projectimator",
    deployed: "https://arcane-dusk-72745.herokuapp.com/",
  },
  {
    id: "project3",
    name: "Cryptelligent",
    about: "App for new investors who wish to learn more about the world of cryptocurrency.",
    skills: ["Tech: Materialize, CoinGecko API, Bloomberg API"],
    url: "https://github.com/spclk/Cryptelligent",
    deployed: "https://spclk.github.io/Cryptelligent/",
  },
  {
    id: "project4",
    name: "Employee Directory",
    about: "A simple directory designed for employees to pull up co-workers' contacts.",
    skills: ["Tech: React, Node.js, Random User API"],
    url: "https://github.com/spclk/Employee-Directory",
    deployed: "https://spclk.github.io/Employee-Directory/",
  },
];

const section5Title = "Contact Me";
const contact = {
  contactUrl: "https://formspree.io/f/mqkwwpda",
};

const social = {
  github: "https://github.com/spclk",
  linkedin: "https://www.linkedin.com/in/-konstantin/",
  email: "mailto:konstantin1020@gmail.com",
  resume: "https://drive.google.com/file/d/1oEKMkmEsjIm9RklGYjS656hddlTD64lF/view?usp=sharing",
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
