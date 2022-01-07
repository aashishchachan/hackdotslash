import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LineChart from '../components/LineChart'
// import { Bar } from 'react-chartjs-2';
import BarChart from '../components/BarChart'
import Doughnut from '../components/DoughnutChart';

export default function Home() {
  return (
    <div className={styles.container}>
    <h1>Team Gazette</h1>
    <BarChart />
    <LineChart />
    <Doughnut />
    </div>
  )
}
