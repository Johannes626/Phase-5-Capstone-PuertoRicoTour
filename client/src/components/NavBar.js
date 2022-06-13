import React from 'react'
import { Link } from "react-router-dom";

function NavBar({userLogged, greeting, setReRender, reRender, handleSearchFilter, searchBar, setSearchBar}) {

    return (
        <div className="navbar-top">
            {userLogged === false ? <h2>PuertoRicoTour</h2> : <h2>{`PuertoRicoTour - Welcome, ${greeting}!`}</h2>}
            <input placeholder="Search for places here..." type="text" id="search-bar" onChange={handleSearchFilter} value={searchBar}></input>
            { userLogged === false ? <Link to="/page-login">Login</Link> : <Link to="/page-logout">Logout</Link>}
            <Link to="/page-saves">Saves❤️</Link>
            <Link to="/" onClick={()=>{setReRender(!reRender)}}>Home</Link>
        </div>
    )
}

export default NavBar