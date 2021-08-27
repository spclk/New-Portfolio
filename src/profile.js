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

const header = {
  name: "Konstantin",
};
const background = {

  type: "Particle",
};

const section2title = "About Me";
const about = {
  paragraph:
    "I am a Web Developer with a background in social services. I've recently earned a Full-Stack Developer certificate from the UC Davis Coding Bootcamp, where I've gained skills in JavaScript, React, back-end databases, and all things MERN stack. I am a curious life-long student, with a never-ceasing drive to learn and grow. I'm super passioanate about developing tools that alleviate the challenges of life and help everyday people thrive.",
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
  {
    name: "MongoDB",
    svg: "m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z",
    faClass: "fab fa-html5",
  },
  {
    name: "MySQL",
    svg: "M179.076 94.886c-3.568-.1-6.336.268-8.656 1.25-.668.27-1.74.27-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.72l2.855 2.053c1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.5.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428l-1.34-1.293c-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.1c.98-.1 2.14-.447 3.078-.715 1.518-.4 2.9-.312 4.46-.713l2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436l-3.658-7.763c-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.5-1.205 2.9 1.785 5.755 2.8 7.228.76 1.026 1.74 2.186 2.277 3.346.3.758.4 1.562.713 2.365.713 1.963 1.383 4.15 2.32 5.98.5.937 1.025 1.92 1.65 2.767.357.5.982.714 1.115 1.517-.625.893-.668 2.23-1.025 3.347-1.607 5.042-.982 11.288 1.293 15 .715 1.115 2.4 3.57 4.686 2.632 2.008-.803 1.56-3.346 2.14-5.577.135-.535.045-.892.312-1.25v.1l1.83 3.703c1.383 2.186 3.793 4.462 5.8 5.98 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.1 0-.18.1-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.5-.535-1.294-.178-1.83.088-.357.268-.5.623-.58.58-.5 2.232.134 2.812.4 1.65.67 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.1 4.37.5 2.365.76 4.506 1.874 6.426 3.08 5.844 3.703 10.664 8.968 13.92 15.26.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.56.938 2.097 1.83 4.24 3.168 5.98.67.937 3.346 1.427 4.55 1.918.893.4 2.275.76 3.08 1.25 1.516.937 3.033 2.008 4.46 3.034.713.534 2.945 1.65 3.078 2.54zm-45.5-38.772a7.09 7.09 0 0 0-1.828.223v.1h.088c.357.714.982 1.205 1.428 1.83l1.027 2.142.088-.1c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z",
    faClass: "",
  },
  {
    name: "npm",
    faClass: "fab fa-npm",
  },
  {
    name: "git",
    faClass: "fab fa-git-alt",
  },
  {
    name: "React",
    faClass: "vscode-icons:file-type-mongo",
  },
];

const section3Title = "Projects";
const projects = [
  {
    id: "project1",
    name: "ChargeBuddy",
    about: "This app provides geoloaction to locate the user as well as charging stations for Electric Vehicles nearby. The user Registers their information with the application including their cars charging port and it is stored in a database. When they log back in that information and all nearby charging stations are displayed in a map on their homepage.",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/ChargeBuddy",
  },
  {
    id: "project2",
    name: "Projectimator",
    about: "Provides an online service for Homeowners to locate contractors that are able to work within a specified budget.",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/Projectimator",
  },
  {
    id: "project3",
    name: "Cryptelligent",
    about: "App for new investors who wish to learn more about the world of cryptocurrency. CoinGecko and Bloomberg APIs are utilized to provide the cryptocurrency information.",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/Cryptelligent",
  },
  {
    id: "project4",
    name: "Weather Dashborad",
    about: "imple weather app that allows you to check for current weather conditions and a 5-day forecast. It retrieves weather data for cities using the OpenWeather APIs. Searching for multiple cities will give you a clickable search history list you can use to retrieve weather for those cities again.",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/spclk/weather-dashboard",
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
