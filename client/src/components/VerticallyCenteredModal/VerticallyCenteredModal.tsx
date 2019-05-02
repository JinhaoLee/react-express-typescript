import React from 'react'
import { Modal } from 'react-bootstrap'
import { SignupForm, SigninForm } from '..'

type Props = {
  show: boolean
  onHide: () => void
  signin: boolean
}
const VerticallyCenteredModal: React.SFC<Props> = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.signin ? 'Sign In' : 'Sign Up'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.signin ? (
          <SigninForm onHide={props.onHide} />
        ) : (
          <SignupForm onHide={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  )
}

export default VerticallyCenteredModal
