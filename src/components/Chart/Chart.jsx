import React from "react";
import "./chart.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ["Peligro", "Alerta", "Ok", "Sin datos"],
    datasets: [
      {
        data: [30, 20, 40, 10],
        backgroundColor: ["#ED461C", "#FFCE56", "#12DD6A", "#6D7EE8"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB", "#4BC0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <section className="chart-container">
      <h2 className="chart-title">Estatus silobolsas</h2>
      <Doughnut data={data} options={options} />
    </section>
  );
};

export default ChartComponent;
