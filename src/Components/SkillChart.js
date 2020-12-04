import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { render } from "@testing-library/react";

const SkillChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "Java ",
            "PHP",
            "SQL",
            "Python",
            "HTML",
            "CSS/SASS",
            "JavaScript",
            "React JS",
            "jQuery/AJAX",
          ],
          datasets: [
            {
              label: "$ of lanaguages",
              data: [20, 15, 18, 10, 8, 8, 10, 5, 6],
              backgroundColor: [
                "rgba(40,167,69, 0.4)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255,195,15, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(17,17,17, 0.2)",
                "rgba(85,243,0, 0.2)",
                "rgba(104,182,255, 0.2)",
              ],
              borderColor: [
                "rgba(40,167,69, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255,195,15, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(17,17,17, 1)",
                "rgba(85,243,0, 1)",
                "rgba(104,182,255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={400}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default SkillChart;
