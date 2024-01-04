import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  plugins: { legend: false },
  scales: {
    x: { grid: { display: false } },
    y: {
      ticks: { stepSize: 2, callback: (value) => value + "%" },
      grid: { borderDash: [10] },
    },
  },
};

const HumidityGraph = ({ forecast }) => {
  const forecastArr = forecast[0].list;

  const data = {
    labels: forecastArr.map((obj) => {
      return new Date(obj.dt_txt).toLocaleTimeString([], {
        hour: "2-digit",
        hour12: true,
      });
    }),
    datasets: [
      {
        data: forecastArr.map((obj) => obj.main.humidity),
        borderColor: "#c6e7e8",
        pointBorderColor: "transparent",
        pointBorderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default HumidityGraph;
