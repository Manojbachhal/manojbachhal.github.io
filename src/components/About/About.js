import React, { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { Button } from "@material-ui/core";

function About() {
  const { theme } = useContext(ThemeContext);
  const abouts = {
    title: "Full Stack Web Developer",
    description:
      "Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux and MongoDB. Love to make Interactive UI's. I am a problem-solver and a quick learner who is constantly seeking new challenges and opportunities to grow and develop my skills. I am a highly motivated Full Stack Developer with good technical skills and a passion for creating innovative and effective solutions.",
  };
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing"
    );
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv";
  };
  return (
    // <div
    //   className="about about section"
    //   id="about"
    //   style={{ backgroundColor: theme.secondary }}
    // >
    //   <div className="line-styling">
    //     <div
    //       className="style-circle"
    //       style={{ backgroundColor: theme.primary }}
    //     ></div>
    //     <div
    //       className="style-circle"
    //       style={{ backgroundColor: theme.primary }}
    //     ></div>
    //     <div
    //       className="style-line"
    //       style={{ backgroundColor: theme.primary }}
    //     ></div>
    //   </div>
    //   <div className="about-body">
    //     <div className="about-description">
    //       <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
    //       <p style={{ color: theme.tertiary80 }} id="user-detail-name">
    //         {aboutData.description1}
    //         <br />
    //         <br />
    //       </p>
    //       <p style={{ color: theme.tertiary80 }} id="user-detail-intro">
    //         {aboutData.description2}
    //       </p>
    //     </div>
    //     <div className="about-img">
    //       <img
    //         src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="about_container about section" id="about">
      <h2 className="head-text">
        About<span> Me</span>
      </h2>
      <div className="app__profiles">
        <div className="app__profile-item">
          <div className="app__profile-subitem">
            {/* <img src={images.about01} alt={abouts.title} /> */}
          </div>
          <div className="app__profile-description">
            <p
              className="p-text"
              style={{ marginTop: 10 }}
              id="user-detail-intro"
            >
              {abouts.description}
            </p>
            <Button
              onClick={handleClick}
              download
              className="button-5"
              id="resume-button-2"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
