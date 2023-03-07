import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "./calender.css";

function Calender() {
  const selectLast12Months = (contributions) => {
    const today = new Date();
    const startTimestamp = new Date(
      today.getFullYear(),
      today.getMonth() - 11,
      1
    ).getTime();
    const endTimestamp =
      new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

    return contributions.filter((day) => {
      const contributionTimestamp = new Date(day.date).getTime();

      return (
        contributionTimestamp >= startTimestamp &&
        contributionTimestamp <= endTimestamp
      );
    });
  };

  return (
    <div className="github-main">
      {/* <div class="text-divider-git"></div> */}
      <h1 className="github-heading">GitHub</h1>
      <div className="github-calender">
        <GitHubCalendar
          className="github-calendar-class"
          transformData={selectLast12Months}
          username="uzairansari11"
          color={"black"}
          blockSize={15}
          fontSize={20}
          showColorLegend
          hideTotalCount
          style={{ padding: "10px 20px"}}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="github-stats">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=uzairansari11&border=000000&ring=000000&currStreakLabel=000000&fire=000000"
            alt="Uzair Stats"
            id="github-streak-stats"
          />
        </div>
        <div>
          <img
            // src="https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&title_color=ffffff&text_color=ffffff&icon_color=ffffff&bg_color=8f3e41&border_radius=10&border_color=1a1a1a"

            src='https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&hide=shell,Nix&title_color=black&height=500px'
            alt="Uzair Stats"
            id="github-top-langs"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=uzairansari11&theme=graywhite&show_icons=true&border=0000"
            alt="Uzair Stats"
            id="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
