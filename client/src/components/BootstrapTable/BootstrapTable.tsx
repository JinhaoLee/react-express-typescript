import React from 'react'
import { Table } from 'react-bootstrap'
import Styles from './table.module.css'

export interface IData {
  data: Array<{ [key: string]: string | number }>
}

const BootstrapTable: React.FC<IData> = ({ data }) => {
  const renderRows = () => {
    console.log(data)
    if (data) {
      const modifiedData = data.map(item => ({
        LGA: item.LGA,
        total: item.total,
      }))
      return modifiedData.map(
        (item: { [key: string]: string | number }, i: number) => (
          <tr key={i}>
            {Object.values(item).map((value: string | number, j: number) => (
              <td key={j}>{value}</td>
            ))}
          </tr>
        )
      )
    }
  }

  return (
    <>
      <Table striped bordered hover className={Styles.table}>
        <thead>
          <tr>
            <th>LGA</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </>
  )
}

export default BootstrapTable
