import React, { useCallback, useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from 'react-bootstrap'
import {
  BootJumbotron,
  BootstrapTable,
  Map,
  Navigation,
} from '../../components'
import { IData } from '../../components/BootstrapTable/BootstrapTable'
import { IParams, ISelect, queryAll, search } from '../../services'

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [data, setData] = useState<any>([])
  const [select, setSelect] = useState<ISelect>({
    offences: [],
    areas: [],
    ages: [],
    genders: [],
    years: [],
  })

  const [form, setForm] = useState<IParams>({
    offence: 'Advertising Prostitution',
    area: '',
    age: '',
    gender: '',
    year: '',
  })

  useEffect(() => {
    const fetchAPI = async () => {
      const { offences, areas, ages, genders, years } = await queryAll()
      setSelect({
        ...select,
        offences: [...select.offences, ...offences],
        areas: [...select.areas, ...areas],
        ages: [...select.ages, ...ages],
        genders: [...select.genders, ...genders],
        years: [...select.years, ...years],
      })
    }
    fetchAPI()
  }, [])

  const fetchData = useCallback(
    (fetchedData: IData) => setData([...data, fetchedData]),
    [data]
  )

  const handleFetch = () => async (event: React.MouseEvent<HTMLElement>) => {
    if (!sessionStorage.getItem('token')) {
      alert('Please log in')
      return
    }
    setIsShown(true)
    setLoading(true)
    const fetchedData = await search(form)
    setData([fetchedData.result])
    setLoading(false)
  }

  const handleChange = (event: React.FormEvent<FormControl>) => {
    const { name, value } = event.target as HTMLInputElement
    setForm({
      ...form,
      [name]: value,
    })
  }

  const renderSelects = () => {
    const formSelects = []
    for (const [key, value] of Object.entries(select)) {
      let array = value

      if (key !== 'offences') {
        array = ['all', ...array]
      }

      formSelects.push(
        <Form.Group controlId={`Form.${key}Select`} key={key}>
          <Form.Label>{key}</Form.Label>
          <Form.Control as="select" onChange={handleChange} name={key}>
            {array.map((name: string, i: number) => (
              <option key={i}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      )
    }
    return formSelects
  }

  return (
    <React.Fragment>
      <Navigation onFetch={fetchData} />
      <BootJumbotron />
      <Container className="mb-5">
        <Row>
          <Col md={4} />
          <Col>
            <Form>
              {renderSelects()}
              <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                  <Button variant="primary" onClick={handleFetch()}>
                    submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col md={4} />
        </Row>
        {isShown ? (
          isLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Row>
              <Col>
                <BootstrapTable data={data[0]} />
              </Col>
              <Col>
                <Map
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_4TBv8ssKrKew8ewisQ3oidXouSyXq8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  data={data[0]}
                />
              </Col>
            </Row>
          )
        ) : null}
      </Container>
    </React.Fragment>
  )
}

export default Home
