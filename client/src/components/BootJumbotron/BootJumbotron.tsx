import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Styles from './bootJumbotron.module.css'

const BootJumbotron: React.SFC = () => {
  return (
    <Jumbotron className={Styles.jumbotron} fluid>
      <h1 className={Styles.heading}>Queensland Government</h1>
      <p className={Styles.page}>
        Reported offender numbers by local government area and crime type
      </p>
    </Jumbotron>
  )
}

export default BootJumbotron
