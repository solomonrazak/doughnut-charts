import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { ChartDatas } from "./chartDatas";

// export const ChartDatas = [
//   { companyName: 'Company A', progressPaymentPrice: 10000 },
//   { companyName: 'Company B', progressPaymentPrice: 15000 },
//   { companyName: 'Company C', progressPaymentPrice: 20000 },
// ];

const backgroundColors = ["#53D9D9", "#002B49", "#0067A0"];

const data: ChartData<'bar'> = {
  labels: ChartDatas.map((item) => item.companyName),
  datasets: [
    {
      label: 'Progress Payment new',
      data: ChartDatas.map((item) => item.progressPaymentPrice),
      backgroundColor: backgroundColors,
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (data) {
          return "Custom Label Text: " + data.formattedValue;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Company',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Progress Payment Price',
      },
    },
  },
};

const BarChart: React.FC = () => {
  return <Bar data={data} options={options} />;
}

export default BarChart;
