import React from 'react'
import { Bar } from 'react-chartjs-2'
import { IData } from '../BootstrapTable/BootstrapTable'

const BarChart: React.SFC<IData> = ({ data }) => {
  console.log(data)
  const labels = data.map(value => value.LGA)
  const dataset = data.map(value => value.total)
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Number of Tweets',
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
  return <Bar data={chartData} width={100} height={50} />
}

export default BarChart
