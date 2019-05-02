import React, { useState } from 'react'
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  ButtonToolbar,
} from 'react-bootstrap'
import Styles from './Navigation.module.css'
import { VerticallyCenteredModal } from '..'

const Navigation: React.FC = () => {
  const [signupShow, setSignupShow] = useState(false)
  const [signinShow, setSigninShow] = useState(false)
  const [singin, setSignin] = useState(false)
  const handleClose = () => {
    setSignupShow(false)
    setSigninShow(false)
  }

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
            <Button
              variant="outline-info"
              className={Styles.button}
              onClick={() => setSignupShow(true)}
            >
              Sign up
            </Button>
            <Button
              variant="outline-info"
              className={Styles.button}
              onClick={() => setSigninShow(true)}
            >
              Sign in
            </Button>
            <VerticallyCenteredModal
              onHide={handleClose}
              show={signupShow}
              signin={false}
            />
            <VerticallyCenteredModal
              onHide={handleClose}
              show={signinShow}
              signin={true}
            />
          </ButtonToolbar>
        </Form>
      </Navbar>
      <br />
    </>
  )
}
export default Navigation
