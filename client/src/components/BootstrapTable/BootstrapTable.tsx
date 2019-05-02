import React, { useEffect, useState, useCallback } from 'react'
import Styles from './table.module.css'
import { Table } from 'react-bootstrap'
import { callAPI } from '../../services'

type Data = {
  offences: string[]
  areas: string[]
}
const BootstrapTable = () => {
  const [data, setData] = useState<Data>({
    offences: [],
    areas: [],
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function() {
      setLoading(true)
      const offenceRes = await callAPI('offences')
      const areasRes = await callAPI('areas')
      const newData = {
        offences: offenceRes.offences,
        areas: areasRes.areas,
      }
      setData(newData)
      setLoading(false)
    })()
  }, [])

  const renderData = useCallback(() => {
    return data.offences.map((offence: string, i: number) => (
      <tr>
        <td key={i}>{offence}</td>
      </tr>
    ))
  }, [data])

  return (
    <>
      <Table striped bordered hover className={Styles.table}>
        <thead>
          <tr>
            <th>Offences</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </>
  )
}

export default BootstrapTable
