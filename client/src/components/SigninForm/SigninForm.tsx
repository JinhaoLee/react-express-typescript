import React, { FormEvent, useState, useCallback } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { login } from '../../services'

type Props = {
  onHide: () => void
}
const SigninForm: React.FC<Props> = ({ onHide }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    login(form.email, form.password).then(res => {
      sessionStorage.setItem('token', res.access_token)
      alert('thanks for login in')
      onHide()
    })
  }

  const updateField = useCallback(
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
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={updateField}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={updateField}
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
