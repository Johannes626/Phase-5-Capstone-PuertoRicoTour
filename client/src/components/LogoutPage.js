import React from 'react'
import {useNavigate} from "react-router-dom";

function LogoutPage({setCurrentUser, setUserLogged, setUserPlaces}) {
    let navigate = useNavigate();
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
        navigate("/")
    }

    return (
        <div className="logout-page">
            <div className="log-form">
                <h3 >Are you sure you want to log out?</h3>
                <button className="form-button" onClick={handleLogout}>Yes, I'm sure</button>
                <br/><br/>
                <button className="form-button" onClick={()=>{navigate("/")}}>No, I would Like to stay</button>
            </div>
        </div>
    )
}

export default LogoutPage