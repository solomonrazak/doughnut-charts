import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJs, ArcElement, Tooltip, Legend, Title} from 'chart.js';

ChartJs.register(ArcElement, Tooltip, Legend, Title) // register the items

const Donut = () => {

    const data = {
        labels: ["yes", "no"],
        datasets: [
            
            {
                label: "polls",
                data: [3, 6],
                backgroundColor: ['blue', 'yellow'],
                borderWidth: 0,
            }
        ]
    }

    const options: any = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                positon: 'top' as const,

            },
            title: {
                display: true,
                text: "This is a small Donut chart"

            }
        }
        

    }
 return <Doughnut data={data} options={options}/>
}

export default Donut;