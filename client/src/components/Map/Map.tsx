import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'

interface IProps {
  isMarkerShown: boolean
}

const Map = withScriptjs(
  withGoogleMap((props: IProps) => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: -27.472, lng: 153.0235 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -27.472, lng: 153.0235 }} />
      )}
    </GoogleMap>
  ))
)

export default Map
