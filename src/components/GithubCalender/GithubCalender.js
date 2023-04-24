import React, { useContext } from "react";
import "./GithubCalender.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import GitHubCalendar from "react-github-calendar";

function GithubCalenderComp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mainContainer" style={{ backgroundColor: theme.secondary }}>
      <div className="Github--header">
        <h1 style={{ color: theme.primary }}>Days I Worked</h1>
      </div>
      <div className="border-Div">
        <GitHubCalendar
          style={{
            color: "white",
            fontFamily: "var(--primaryFont)",
          }}
          blockRadius="10"
          number="16"
          username="manojbachhal"
          theme={{
            level0: "#ebedf0",
            level1: "#99bbff",
            level2: "#6699ff",
            level3: "#3377ff",
            level4: "#F73859",
          }}
        />
      </div>
      <div className="State--header">
        <h1 style={{ color: theme.primary }}>My Statistics</h1>
      </div>
      <div className="stats-Div">
        <img
          align="center"
          src={`https://github-readme-stats.vercel.app/api?username=manojbachhal&amp;show_icons=true&amp;locale=en`}
          alt="manojbachhal"
        />
        <img
          align="center"
          src={`https://github-readme-streak-stats.herokuapp.com/?user=manojbachhal;`}
          alt="mohitkss"
        />
      </div>
    </div>
  );
}

export default GithubCalenderComp;
