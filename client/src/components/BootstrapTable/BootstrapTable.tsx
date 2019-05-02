import React from 'react'
import Styles from './table.module.css'
import { Table } from 'react-bootstrap'

type Data = {
  name: string
  data: string[]
}

const BootstrapTable: React.FC<Data> = ({ name, data }) => {
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
