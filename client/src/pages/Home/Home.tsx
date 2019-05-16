import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from 'react-bootstrap'
import { BootJumbotron, BootTap, Navigation } from '../../components'
import { IParams, ISelect, queryAll, search } from '../../services'
import Styles from './home.module.css'

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
    ;(async () => {
      const { offences, areas, ages, genders, years } = await queryAll()
      setSelect({
        ...select,
        offences: [...select.offences, ...offences],
        areas: [...select.areas, ...areas],
        ages: [...select.ages, ...ages],
        genders: [...select.genders, ...genders],
        years: [...select.years, ...years],
      })
    })()
  }, [])

  const handleSubmit = () => async (event: React.MouseEvent<HTMLElement>) => {
    if (!sessionStorage.getItem('token')) {
      alert('Please log in')
      return
    }
    setIsShown(true)
    setLoading(true)
    const fetchedData = await search(form)
    const updateData = fetchedData.result.filter(value => value.total !== 0)
    setData([updateData])
    setLoading(false)
  }

  const handleChange = (event: React.FormEvent<FormControl>) => {
    const { name, value } = event.target as HTMLInputElement
    setForm({
      ...form,
      [name]: value,
    })
  }

  const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const renderSelects = () => {
    const formSelects = []
    for (const [key, value] of Object.entries(select)) {
      let array = value
      if (key !== 'offences') {
        array = ['All', ...array]
      }
      formSelects.push(
        <Form.Group as={Col} controlId={`Form.${key}Select`} key={key}>
          <Form.Label>{Capitalize(key)}</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name={key.slice(0, -1)}
          >
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
      <Navigation />
      <BootJumbotron />
      <Container className="mb-5">
        <Row className="my-3 px-3">
          <h2>Please select any fields to search</h2>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Row className={Styles.formBorder}>
                {renderSelects()}
              </Form.Row>
              <Form.Group as={Row}>
                <Col sm={{ span: 7, offset: 5 }}>
                  <Button variant="primary" onClick={handleSubmit()}>
                    Search
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {isShown ? (
          isLoading ? (
            <Row>
              <Col sm={{ span: 7, offset: 5 }} className="pl-5 pt-3">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          ) : (
            <Row>
              <BootTap data={data[0]} />
            </Row>
          )
        ) : null}
      </Container>
    </React.Fragment>
  )
}

export default Home
