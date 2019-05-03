import React, { useEffect, useState } from 'react'
import { Container, Image, Spinner } from 'react-bootstrap'
import ReactIamge from '../../assets/logo.svg'
import { BootstrapTable, Navigation } from '../../components'
import { callAPI } from '../../services'
import Styles from './home.module.css'

const Home = () => {
  const [offences, setOffences] = useState([])
  const [areas, setAreas] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
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
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
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
