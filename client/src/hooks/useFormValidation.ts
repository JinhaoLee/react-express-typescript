import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { validateEmail, validatePassword } from '../helpers'
import { register } from '../services'

export interface IForm {
  email: string
  emailValid: boolean
  password: string
  passwordValid: boolean
  touched: {
    email: boolean
    password: boolean
  }
}

const useFormValidation = (initialState: IForm, onHide: () => void) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (event: React.FormEvent<FormControl>) => {
    const { name, value } = event.target as HTMLInputElement
    setForm({
      ...form,
      [name]: value,
      [name + 'Valid']:
        name === 'email' ? validateEmail(value) : validatePassword(value),
    })
  }

  const handleBlur = (field: string) => (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      touched: {
        ...form.touched,
        [field]: true,
      },
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(form.email, form.password)
      .then(res => {
        // TODO: need to be changed
        if (res.message[0] === '0') {
          onHide()
        }
        alert(res.message)
      })
      .catch(error => alert(error))
  }

  return {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}

export default useFormValidation
