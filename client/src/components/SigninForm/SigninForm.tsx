import React, { FormEvent, useState, useCallback } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { UserLogin } from '../../services'

type Props = {
  login: () => void
  onHide: () => void
}

const SigninForm: React.FC<Props> = ({ onHide, login }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    UserLogin(form.email, form.password)
      .then(res => {
        if (res.access_token) {
          sessionStorage.setItem('token', res.access_token)
          onHide()
          login()
          alert('Thanks for login in')
        } else {
          alert(res.message)
        }
      })
      .catch(() => alert('email or username is not correct!'))
  }

  const handleChange = useCallback(
    (event: React.FormEvent<FormControl>) => {
      const { name, value } = event.target as HTMLInputElement
      setForm({
        ...form,
        [name]: value,
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
        />
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
        />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SigninForm
