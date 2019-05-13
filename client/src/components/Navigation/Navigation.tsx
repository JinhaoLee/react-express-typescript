import React, { useState } from 'react'
import { Button, ButtonToolbar, Form, Nav, Navbar } from 'react-bootstrap'
import { VerticallyCenteredModal } from '..'
import Styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  const [signupShow, setSignupShow] = useState(false)
  const [signinShow, setSigninShow] = useState(false)
  const [isLogined, setIsLogined] = useState(
    sessionStorage.getItem('token') !== null
  )

  const handleClose = () => {
    setSignupShow(false)
    setSigninShow(false)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    setIsLogined(false)
    // TODO: need to tell user login
    alert('Hope you go back')
  }

  const renderButtons = () => {
    if (!isLogined) {
      return (
        <>
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
            type={'Sign up'}
          />
          <VerticallyCenteredModal
            onHide={handleClose}
            show={signinShow}
            type={'Sign in'}
            login={() => setIsLogined(true)}
          />
        </>
      )
    }

    return (
      <Button
        variant="outline-info"
        className={Styles.button}
        onClick={handleLogout}
      >
        Logout
      </Button>
    )
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CAB230</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
      </Nav>
      <Form inline>
        <ButtonToolbar>{renderButtons()}</ButtonToolbar>
      </Form>
    </Navbar>
  )
}
export default Navigation
