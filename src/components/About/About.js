import React, { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { Button } from "@material-ui/core";

function About() {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing"
    );
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv";
  };
  return (
    <div
      className="about about section"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }} id="user-detail-name">
            {aboutData.description1}
            <br />
            <br />
          </p>
          <p style={{ color: theme.tertiary80 }} id="user-detail-intro">
            {aboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
      <Button
        onClick={handleClick}
        download
        className="button-5"
        id="resume-button-2"
      ></Button>
    </div>
  );
}

export default About;
