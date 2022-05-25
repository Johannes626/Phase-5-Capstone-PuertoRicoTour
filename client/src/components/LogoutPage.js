import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";

function LogoutPage({setCurrentUser, setUserLogged, setUserPlaces}) {

    //function that handles logout
    const handleLogout = () => {
        fetch("/logout", {method: "DELETE"})
        .then(res => res.json())
        .then(deleteResponse => {
            setCurrentUser(null)
            setUserLogged(false)
            setUserPlaces([])
            alert(deleteResponse.message)
        })
    }

    return (
        <div className="logout-page">
            <div className="log-form">
                <h3 >Are you sure you want to log out?</h3>
                <Link className="redirect-links" onClick={handleLogout} to="/">Yes, I'm sure</Link>
                <br/><br/><br/>
                <Link className="redirect-links" to="/">No, I would Like to stay</Link>
            </div>
        </div>
    )
}

export default LogoutPage