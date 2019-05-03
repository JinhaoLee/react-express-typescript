import React from 'react'
import { Table } from 'react-bootstrap'
import Styles from './table.module.css'

interface IData {
  name: string
  data: string[]
}

const BootstrapTable: React.FC<IData> = ({ name, data }) => {
  const renderData = () => {
    return data.map((offence: string, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{offence}</td>
      </tr>
    ))
  }

  return (
    <>
      <Table striped bordered hover className={Styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </>
  )
}

export default BootstrapTable
