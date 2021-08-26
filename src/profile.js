// Changes website animations
const animation = {
  // switches off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const header = {
  name: "Konstantin",
};
const background = {

  type: "Particle",
};

const section2title = "About Me";
const about = {
  paragraph:
    "Lorem ipsum.",
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
    name: "Database",
    
    faClass: "fas fa-database",
  },
];

const section3Title = "Projects";
const projects = [
  {
    id: "project1",
    name: "ChargeBuddy",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/ChargeBuddy",
  },
  {
    id: "project2",
    name: "Projectimator",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/Projectimator",
  },
  {
    id: "project3",
    name: "Cryptelligent",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/Cryptelligent",
  },
];

const section5Title = "Gontact Me";
const contact = {
  pitch:
    "Lorem ipsum.",
  copyright: "Konstantin Alekseev",
  contactUrl: "",
};

const social = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
