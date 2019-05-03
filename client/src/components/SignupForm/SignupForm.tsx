import React, { useState, FormEvent, useCallback, FocusEvent } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { register } from '../../services'
import { validateEmail, validatePassword } from '../../helpers'

type Props = {
  onHide: () => void
}

const SignupForm: React.FC<Props> = ({ onHide }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    touched: { email: false, password: false },
    emailValid: false,
    passwordValid: false,
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    register(form.email, form.password)
      .then(res => {
        alert(res.message)
        onHide()
      })
      .catch(error => alert(error))
  }

  const handleBlur = (field: string) => (
    _event: FocusEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      touched: {
        ...form.touched,
        [field]: true,
      },
    })
    console.log(form.touched)
  }

  const handleChange = useCallback(
    (event: FormEvent<FormControl>) => {
      const { name, value } = event.target as HTMLInputElement
      setForm({
        ...form,
        [name]: value,
        [name + 'Valid']:
          name === 'email' ? validateEmail(value) : validatePassword(value),
      })
    },
    [form]
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
          Please provide a valid password, which length should be greater than
          6.
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
