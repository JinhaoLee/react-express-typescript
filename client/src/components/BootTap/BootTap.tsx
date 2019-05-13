import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import { BootstrapTable, Map } from '..'
import { IData } from '../BootstrapTable/BootstrapTable'
import Styles from './bootTap.module.css'

const BootTap: React.FC<IData> = ({ data }) => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab"
      className={Styles.fullWidthTabs}
    >
      <Tab eventKey="home" title="Home" className={Styles.fullWidthTabs}>
        <Row>
          <Col>
            <BootstrapTable data={data} />
          </Col>
          <Col>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_4TBv8ssKrKew8ewisQ3oidXouSyXq8&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              data={data}
            />
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Hello World</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Hello World</p>
      </Tab>
    </Tabs>
  )
}

export default BootTap
