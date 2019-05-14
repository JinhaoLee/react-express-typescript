import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { BootstrapTable, Map } from '..'
import { IData } from '../BootstrapTable/BootstrapTable'
import Styles from './bootTap.module.css'

const BootTap: React.FC<IData> = ({ data }) => {
  return (
    <Tabs defaultActiveKey="table" id="tab" className={Styles.fullWidthTabs}>
      <Tab eventKey="table" title="Table">
        <BootstrapTable data={data} />
      </Tab>
      <Tab eventKey="map" title="Map">
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_4TBv8ssKrKew8ewisQ3oidXouSyXq8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          data={data}
        />
      </Tab>
      <Tab eventKey="graph" title="Graph">
        <p>Hello World</p>
      </Tab>
    </Tabs>
  )
}

export default BootTap
