import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import useFormValidation from '../../hooks/useFormValidation'
import { NaviContext } from '../Navigation/Navigation'

const SignupForm: React.FC = () => {
  const value = useContext(NaviContext)
  const { form, handleChange, handleBlur, handleSubmit } = useFormValidation(
    {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      touched: { email: false, password: false },
    },
    value!.onHide
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          isInvalid={!form.emailValid && form.touched.email}
          onBlur={handleBlur('email')}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          isInvalid={!form.passwordValid && form.touched.password}
          onBlur={handleBlur('password')}
        />
        <Form.Control.Feedback type="invalid">
          Password length should be greater than 6.
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!form.emailValid || !form.passwordValid}
      >
        Submit
      </Button>
    </Form>
  )
}

export default SignupForm
