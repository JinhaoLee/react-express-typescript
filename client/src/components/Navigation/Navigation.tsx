import React, { useState } from 'react'
import { Button, ButtonToolbar, Form, Nav, Navbar } from 'react-bootstrap'
import { VerticallyCenteredModal } from '..'
import { IData } from '../BootstrapTable/BootstrapTable'
import Styles from './Navigation.module.css'

interface IProps {
  onFetch: (fetchedData: IData) => void
}

const Navigation: React.FC<IProps> = ({ onFetch }) => {
  const [signupShow, setSignupShow] = useState(false)
  const [signinShow, setSigninShow] = useState(false)
  const [isLogined, setIsLogined] = useState(
    sessionStorage.getItem('token') !== null
  )

  const handleClose = () => {
    setSignupShow(false)
    setSigninShow(false)
  }

  const handleLogin = () => {
    setIsLogined(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    setIsLogined(false)
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
            login={handleLogin}
          />
          <VerticallyCenteredModal
            onHide={handleClose}
            show={signinShow}
            type={'Sign in'}
            login={handleLogin}
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
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CAB230</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
        </Nav>
        <Form inline>
          {/* <FormControl
            name="filter"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={form.filter}
            onChange={handleChange}
          /> */}
          <ButtonToolbar>
            {/* <Button variant="outline-info" onClick={handleSearch}>
              Search
            </Button> */}
            {renderButtons()}
          </ButtonToolbar>
        </Form>
      </Navbar>
    </>
  )
}
export default Navigation
