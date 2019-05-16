import React from 'react'
import { Bar } from 'react-chartjs-2'
import { IData } from '../BootstrapTable/BootstrapTable'
import Styles from './barChart.module.css'

const BarChart: React.SFC<IData> = ({ data }) => {
  const labels = data.map(value => value.LGA)
  const dataset = data.map(value => value.total)
  const chartData = {
    labels,
    datasets: [
      {
        data: dataset,
        backgroundColor: [
          '#F08080',
          '#dc3545',
          '#ffc107',
          '#007bff',
          '#28a745',
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      },
    ],
  }
  const options = {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Area',
      fontSize: 15,
    },
    scales: {
      xAxes: [
        {
          maxBarThickness: 50,
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Total',
            fontSize: 15,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <div className={Styles.chart}>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default BarChart
