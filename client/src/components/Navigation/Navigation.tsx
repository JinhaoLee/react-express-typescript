import React from 'react'
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  ButtonToolbar,
} from 'react-bootstrap'
import Styles from './Navigation.module.css'

const Navigation: React.SFC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <ButtonToolbar>
            <Button variant="outline-info">Search</Button>
            <Button variant="outline-info" className={Styles.button}>
              Sign up
            </Button>
            <Button variant="outline-info" className={Styles.button}>
              Sign in
            </Button>
          </ButtonToolbar>
        </Form>
      </Navbar>
      <br />
    </>
  )
}
export default Navigation
