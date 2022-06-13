import React from 'react'
import {GoogleMap, Marker} from '@react-google-maps/api'
import {useMemo} from 'react'
// import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import PlacesAutocomplete from './PlacesAutocomplete'
import {useState} from 'react'

function Map() {

    const center = useMemo(()=>({lat: 18.20, lng: -66.45}), [])
    const [selected, setSelected] = useState(null)
    return (
        <div className="first-map-child">
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected}/>
            </div>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {/* <Marker position={{lat: 18.20, lng: -66.45}}/> */}
            </GoogleMap>
        </div>
        
    )
}

export default Map