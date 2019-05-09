import React, { useCallback, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import {
  BootJumbotron,
  BootstrapTable,
  Map,
  Navigation,
} from '../../components'
import { IData } from '../../components/BootstrapTable/BootstrapTable'
import { search } from '../../services'
// import Styles from './home.module.css'

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState<any>([])

  const fetchData = useCallback(
    (fetchedData: IData) => setData([...data, fetchedData]),
    [data]
  )

  const handleFetch = useCallback(
    (param: string) => async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (!sessionStorage.getItem('token')) {
        alert('Please log in')
        return
      }
      setLoading(true)
      switch (param) {
        case 'age': {
          const fetchedData = await search('age', 'Juvenile')
          setData([fetchedData.result])
          break
        }
        case 'area': {
          const fetchedData = await search(
            'area',
            'Moreton Bay Regional Council'
          )
          setData([fetchedData.result])
          break
        }
        case 'year': {
          const fetchedData = await search('year', '2006,2007,2008')
          setData([fetchedData.result])
          break
        }
        default: {
          throw new Error()
        }
      }
      setLoading(false)
    },
    [data]
  )

  return (
    <React.Fragment>
      <Navigation onFetch={fetchData} />
      <BootJumbotron />
      <Container fluid={true}>
        <Row>
          <Col md={2} />
          <Col>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                  <Button variant="primary" onClick={handleFetch('area')}>
                    area=Moreton Bay Regional Council
                  </Button>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Button variant="primary" onClick={handleFetch('age')}>
                    age=Juvenile
                  </Button>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Button variant="primary" onClick={handleFetch('year')}>
                    year=2006,2007,2008
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col md={2} />
        </Row>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Row>
            <Col>
              <BootstrapTable data={data[0]} name={'offences'} />
            </Col>
            <Col>
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_4TBv8ssKrKew8ewisQ3oidXouSyXq8&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>
          </Row>
        )}
      </Container>
    </React.Fragment>
  )
}

export default Home
