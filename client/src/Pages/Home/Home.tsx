import React, { useState, useEffect } from 'react'
import { Navigation, BootstrapTable } from '../../components'
import { Container } from 'react-bootstrap'
import { callAPI } from '../../services'

const Home = () => {
  const [offences, setOffences] = useState([])
  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function() {
      setLoading(true)
      const offenceRes = await callAPI('offences')
      const areasRes = await callAPI('areas')
      setOffences(offenceRes.offences)
      setAreas(areasRes.areas)
      setLoading(false)
    })()
  }, [])

  return (
    <React.Fragment>
      <Navigation />
      <Container fluid={true}>
        <BootstrapTable data={offences} name={'offences'} />
        <BootstrapTable data={areas} name={'areas'} />
      </Container>
    </React.Fragment>
  )
}

export default Home
