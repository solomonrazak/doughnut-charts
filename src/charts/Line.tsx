import React from "react";
import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";

// Define the labels and data
const labels = ["January", "February", "March", "April", "May", "June"];

const data: ChartData<'line'> = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: false,
    },
  ],
};

// Define chart options
const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart Example',
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value',
      },
      min: 0,
      max: 50,
    },
  },
};

const LineChart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
