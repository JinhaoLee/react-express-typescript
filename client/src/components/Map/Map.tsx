import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import { ISearchRes } from '../../services'

interface IProps {
  isMarkerShown: boolean
  data: any
}

const Map = withScriptjs(
  withGoogleMap((props: IProps) => (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: -23.116667, lng: 132.133333 }}
    >
      {props.isMarkerShown &&
        props.data &&
        props.data.map((item: ISearchRes, i: number) => (
          <Marker key={i} position={{ lat: item.lat, lng: item.lng }} />
        ))}
    </GoogleMap>
  ))
)

export default Map
