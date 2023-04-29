import React, { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";

function About() {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1uk9MQMNGk83W7Qu7DK13gSHmO32_CWCs/view?usp=share_link"
    );
    const url =
      "https://drive.google.com/u/0/uc?id=1U8x4DKkLwn9k8Vi1fquqlAz5C1hf8brY&export=download";
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <p
        // href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
        // download
        style={{ color: "red" }}
        className="nav-link resume"
        id="resume-button-2"
        onClick={handleClick}
      >
        resume
      </p>
    </div>
  );
}

export default About;
