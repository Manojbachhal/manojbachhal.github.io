import html from "../assets/svg/skills/html.svg";

import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";

import react from "../assets/svg/skills/react.svg";

import bootstrap from "../assets/svg/skills/bootstrap.svg";

import mongoDB from "../assets/svg/skills/mongoDB.svg";
import java from "../assets/svg/skills/java.svg";

import git from "../assets/svg/skills/git.svg";

import wordpress from "../assets/svg/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "java":
      return java;
    case "git":
      return git;
    case "wordpress":
      return wordpress;
    case "redux":
      return "https://img.icons8.com/ios/2x/redux.png";
    case "node js":
      return "https://img.icons8.com/fluency/2x/node-js.png";
    case "express js":
      return "https://img.icons8.com/nolan/2x/express-js.png";
    default:
      break;
  }
};
