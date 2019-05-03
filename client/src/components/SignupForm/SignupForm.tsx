import React, { FocusEvent, FormEvent, useCallback, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { validateEmail, validatePassword } from '../../helpers'
import { register } from '../../services'

interface IProps {
  onHide: () => void
}

const SignupForm: React.FC<IProps> = ({ onHide }) => {
  const [form, setForm] = useState({
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    touched: { email: false, password: false },
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    register(form.email, form.password)
      .then(res => {
        if (res.message[0] === '0') {
          onHide()
        }
        alert(res.message)
      })
      .catch(error => alert(error))
  }

  const handleBlur = (field: string) => (
    event: FocusEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      touched: {
        ...form.touched,
        [field]: true,
      },
    })
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
