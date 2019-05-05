import React, { useCallback, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { BootJumbotron, BootstrapTable, Navigation } from '../../components'
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
      <BootJumbotron handleFetch={handleFetch} />
      <Container fluid={true}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <BootstrapTable data={data[0]} name={'offences'} />
        )}
      </Container>
    </React.Fragment>
  )
}

export default Home
