import React, { useState, useEffect } from 'react'
import { Navigation, BootstrapTable } from '../../components'
import { Container, Image } from 'react-bootstrap'
import { callAPI } from '../../services'
import ReactIamge from '../../assets/logo.svg'
import Styles from './home.module.css'

const Home = () => {
  const [offences, setOffences] = useState([])
  const [areas, setAreas] = useState([])
  const [isLoading, setLoading] = useState(false)

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
      <Image src={ReactIamge} fluid rounded className={Styles.image} />
      <Container fluid={true}>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <BootstrapTable data={offences} name={'offences'} />
            <BootstrapTable data={areas} name={'areas'} />
          </>
        )}
      </Container>
    </React.Fragment>
  )
}

export default Home
