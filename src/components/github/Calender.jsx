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
      <h1 className="github-heading">GitHub</h1>
      <div className="github-calender">
        <GitHubCalendar
          className="github-calendar-class"
          transformData={selectLast12Months}
          username="uzairansari11"
          color={"red"}
          blockSize={14}
          fontSize={20}
          showColorLegend
          hideTotalCount
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="github-stats">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=uzairansari11&ring=black&currStreakLabel=000000&fire=black"
            alt="Uzair Stats"
            id="github-streak-stats"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&layout=compact&langs_count=10"
            alt="Uzair Stats"
            id="github-top-langs"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=uzairansari11&theme=black&show_icons=true"
            alt="Uzair Stats"
            id="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
