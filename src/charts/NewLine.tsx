
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, ChartOptions, ChartData, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the labels and data
const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const data: ChartData<'line'> = {
  labels: labels,
  datasets: [
    {
      label: "Weekly Sales",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      data: [12, 19, 3, 5, 2, 3, 9],
      fill: false,
      tension: 0.4, // Adjust tension for curved lines
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
      text: 'Curved Line Chart Example',
    },
    tooltip: {
      enabled: true, // Disable tooltips
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Day of the Week',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Sales',
      },
      min: 0,
      max: 20,
    },
  },
};

const NewLine: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default NewLine;