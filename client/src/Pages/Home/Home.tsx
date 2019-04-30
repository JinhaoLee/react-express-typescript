import React from 'react'
import { Navigation, BootstrapTable } from '../../components'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container fluid={true}>
        <BootstrapTable />
      </Container>
    </React.Fragment>
  )
}

export default Home
