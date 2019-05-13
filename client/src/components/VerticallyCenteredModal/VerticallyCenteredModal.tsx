import React from 'react'
import { Modal } from 'react-bootstrap'
import { SigninForm, SignupForm } from '..'

interface IProps {
  show: boolean
  type: string
  onHide: () => void
}

const VerticallyCenteredModal: React.SFC<IProps> = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type === 'Sign in' ? <SigninForm /> : <SignupForm />}
      </Modal.Body>
    </Modal>
  )
}

export default VerticallyCenteredModal
