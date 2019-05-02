import React, { useState, FormEvent, useCallback } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { register } from '../../services'

type Props = {
  onHide: () => void
}

const SignupForm: React.FC<Props> = ({ onHide }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
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
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SignupForm
