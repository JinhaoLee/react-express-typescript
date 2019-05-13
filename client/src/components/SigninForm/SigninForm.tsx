import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik'
import React from 'react'
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import * as Yup from 'yup'
import { UserLogin } from '../../services'

interface IFormValues {
  email: string
  password: string
}

interface IProps {
  onLogin: () => void
  onHide: () => void
}

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
})

const SigninForm: React.FC<IProps> = ({ onHide, onLogin }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SigninSchema}
        onSubmit={async (
          values: IFormValues,
          actions: FormikActions<IFormValues>
        ) => {
          try {
            const loginResponse = await UserLogin(values.email, values.password)
            if (loginResponse.token) {
              sessionStorage.setItem('token', loginResponse.token)
              onHide()
              onLogin()
            } else {
              alert(loginResponse.message)
              actions.setSubmitting(false)
            }
          } catch (error) {
            alert('email or username is not correct!')
          }
        }}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form>
            <Field
              name="email"
              type="email"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <FormGroup controlId="formBasicEmail">
                  <FormLabel>Email address</FormLabel>
                  <FormControl
                    placeholder="Enter email"
                    isInvalid={!!form.errors.email}
                    {...field}
                  />
                  <FormControl.Feedback type="invalid">
                    <ErrorMessage name="email" />
                  </FormControl.Feedback>
                </FormGroup>
              )}
            />
            <Field
              name="password"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <FormGroup controlId="formBasicPassword">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    isInvalid={!!form.errors.password}
                    {...field}
                  />
                  <FormControl.Feedback type="invalid">
                    <ErrorMessage name="password" />
                  </FormControl.Feedback>
                </FormGroup>
              )}
            />
            <Button
              variant="primary"
              type="submit"
              disabled={formikBag.isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      />
    </div>
  )
}

export default SigninForm
