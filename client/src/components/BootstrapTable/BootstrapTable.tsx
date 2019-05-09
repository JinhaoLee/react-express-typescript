import React from 'react'
import { Table } from 'react-bootstrap'
import Styles from './table.module.css'

export interface IData {
  data: Array<{ [key: string]: string | number }>
}

const BootstrapTable: React.FC<IData> = ({ data }) => {
  const renderRows = () => {
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
    <div style={{ height: '400px', overflow: 'overlay' }}>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive
        className={Styles.table}
      >
        <thead>
          <tr>
            <th>LGA</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </div>
  )
}

export default BootstrapTable
