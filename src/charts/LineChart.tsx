


import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, ChartOptions, ChartData, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

// Define the labels and data
const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const data: ChartData<'line'> = {
  labels: labels,
  datasets: [
    {
      label: "Weekly Sales",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      data: [4, 10, 15, 5, 5, 3, 9],
      fill: false,
      tension: 0, // Adjust tension for curved lines
    },
  ],
};

// Define chart options
const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: true, // Hide title
    },
    tooltip: {
      enabled: true, // Disable tooltips
    },
  },
  scales: {
    x: {
      display: true, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  elements: {
    point: {
      radius: 2, // Hide points
    },
  },
};

const LineChart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
