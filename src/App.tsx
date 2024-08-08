import './App.css'
import BarChart from './charts/BarChart'
import Donut from './charts/Donut'
import LineChart from './charts/LineChart'
import NewDonut from './charts/NewDonut'


function App() {


  return (
   <div className="App">
    <h1>Creating Charts with Chart.js</h1>
    <div style={{width: "400px", height: "200px"}}>
      <Donut />

    </div>
    <div style={{width: "100px", height: "70px"}}>
      <NewDonut />

    </div>

    <LineChart />
    <BarChart />
    

   </div>
  )
}

export default App
