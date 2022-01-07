import React from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import Doughnut from './DoughnutChart';

const Dashboard = ({coin}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>COINS =  {coin} eth</h3>
            <LineChart />
            <BarChart />
            <Doughnut />
        </div>
    )
}

export default Dashboard

