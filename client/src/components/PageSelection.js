import React from 'react'
import { Link } from "react-router-dom";

function PageSelection() {

    return (
        <div className="navbar-bottom">
            <Link to="restaurants">Restaurants</Link>
            <Link to="touristic-locations">Touristic Locations</Link>
            <Link to="map-locations">Map</Link>
        </div>
    )
}

export default PageSelection