import React, { useContext } from "react";
import "./GithubCalender.css";
// import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import GitHubCalendar from "react-github-calendar";

function GithubCalenderComp() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
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
          // theme={{
          //   level0: "#ebedf0",
          //   level1: "#99bbff",
          //   level2: "#6699ff",
          //   level3: "#3377ff",
          //   level4: "#F73859",
          // }}
        />
      </div>
      <div className="State--header">
        <h1 style={{ color: theme.primary }}>My Statistics</h1>
      </div>
      <div className="stats-Div">
        <div>
          <img
            align="center"
            id="github-stats-card"
            src={`https://github-readme-stats.vercel.app/api?username=manojbachhal&theme=blue-green&amp;show_icons=true&amp;locale=en`}
            // src={`https://github-readme-stats.vercel.app/api/top-langs/?username=manojbachhal&theme=swift`}
            alt="Manojbachhal"
          />
        </div>
        <div>
          <img
            id="github-streak-stats"
            align="center"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=manojbachhal&theme=blue-green&amp;show_icons=true&amp;locale=en;`}
            alt="manojbachhal"
          />
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <img
          align="center"
          id="github-top-langs"
          // src={`https://github-readme-stats.vercel.app/api?username=manojbachhal&amp;show_icons=true&amp;locale=en`}
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=manojbachhal&theme=blue-green`}
          alt="Manojbachhal"
        />
      </div>
    </div>
  );
}

export default GithubCalenderComp;
