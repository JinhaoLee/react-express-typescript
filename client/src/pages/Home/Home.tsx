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
import { IParams, queryAPI, search } from '../../services'

interface ISelect {
  offence: string[]
  area: string[]
  age: string[]
  gender: string[]
  year: string[]
}

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [data, setData] = useState<any>([])
  const [select, setSelect] = useState<ISelect>({
    offence: [],
    area: [],
    age: [],
    gender: [],
    year: [],
  })

  const [form, setForm] = useState<IParams>({
    offence: 'Advertising Prostitution',
    area: '',
    age: '',
    gender: '',
    year: '',
  })

  const fetchAPI = async () => {
    const offenceArray = await queryAPI('offences')
    const areaArray = await queryAPI('areas')
    const ageArray = await queryAPI('ages')
    const genderArray = await queryAPI('genders')
    const yearArray = await queryAPI('years')
    setSelect({
      ...select,
      offence: [...select.offence, ...offenceArray.offences],
      area: [...select.area, ...areaArray.areas],
      age: [...select.age, ...ageArray.ages],
      gender: [...select.gender, ...genderArray.genders],
      year: [...select.year, ...yearArray.years],
    })
  }

  useEffect(() => {
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

      if (key !== 'offence') {
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
