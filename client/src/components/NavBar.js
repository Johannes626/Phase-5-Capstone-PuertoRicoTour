import React from 'react'
import { Link } from "react-router-dom";

function NavBar({userLogged, greeting}) {

    return (
        <div className="navbar-top">
            {userLogged === false ? <h2>PuertoRicoTour</h2> : <h2>{`PuertoRicoTour - Welcome, ${greeting}!`}</h2>}
            {/* <input type="text" id="search-bar"></input> */}
            { userLogged === false ? <Link to="/page-login">Login</Link> : <Link to="/page-logout">Logout</Link>}
            <Link to="/page-saves">Saves❤️</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NavBar