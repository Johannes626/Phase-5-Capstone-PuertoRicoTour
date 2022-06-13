import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from './Map'
// import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'

function MapPage() {
    
    const libraries = ["places"]
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })
    if(!isLoaded){
        return <div>Loading...</div>
    } 
    return (
        <div className="first-map-container">
            <Map/>
        </div>
    )
}

export default MapPage