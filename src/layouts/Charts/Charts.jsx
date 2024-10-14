import React from "react";
import Chip from "../../components/Chip/Chip";
import Chart from "../../components/Chart/Chart";
import "./charts.css";

function Charts() {
  return (
    <section id="chart-container">
      <div className="chips-content">
        <Chip text="Total de Silobolsas: 9" />
        <Chip variant={3} text="Asegurados: 5" />
      </div>

      <Chart />
    </section>
  );
}

export default Charts;
