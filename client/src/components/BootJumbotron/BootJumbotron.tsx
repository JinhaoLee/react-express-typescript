import React from 'react'
import { Button, Col, Form, Jumbotron } from 'react-bootstrap'

interface IProps {
  handleFetch: (
    param: string
  ) =>
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}
const BootJumbotron: React.SFC<IProps> = ({ handleFetch }) => {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Button variant="primary" onClick={handleFetch('area')}>
              area
            </Button>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Button variant="primary" onClick={handleFetch('age')}>
              age
            </Button>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Button variant="primary" onClick={handleFetch('year')}>
              year
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Jumbotron>
  )
}

export default BootJumbotron
