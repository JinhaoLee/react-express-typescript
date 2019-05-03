import React from 'react'
import { Modal } from 'react-bootstrap'
import { SignupForm, SigninForm } from '..'

type Props = {
  show: boolean
  type: string
  onHide: () => void
  login: () => void
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
          {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type == 'Sign in' ? (
          <SigninForm onHide={props.onHide} login={props.login} />
        ) : (
          <SignupForm onHide={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  )
}

export default VerticallyCenteredModal
