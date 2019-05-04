import React from 'react'
import { Table } from 'react-bootstrap'
import Styles from './table.module.css'

export interface IData {
  data: Array<{ [key: string]: string | number }>
}

interface IProsps extends IData {
  name: string
}

const BootstrapTable: React.FC<IProsps> = ({ name, data }) => {
  const renderData = () => {
    if (data) {
      return data.map((item: { [key: string]: string | number }, i: number) => (
        <tr key={i}>
          {Object.values(item).map((value: string | number, j: number) => (
            <td key={j}>{value}</td>
          ))}
        </tr>
      ))
    }
  }

  return (
    <>
      <Table striped bordered hover className={Styles.table}>
        <thead>
          <tr>
            {data &&
              Object.keys(data[0]).map((key, i) => <th key={i}>{key}</th>)}
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </>
  )
}

export default BootstrapTable
