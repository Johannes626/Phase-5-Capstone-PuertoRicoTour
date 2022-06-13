import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function CreateUser() {
    
    const [userToCreate, setUserToCreate] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })
    let navigate = useNavigate();

    const handleCreateInputs = (e) => {
        setUserToCreate({...userToCreate,
            [e.target.name]: e.target.value,
        })
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userToCreate),
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors){
                alert(data.errors)
            } else if (data.name) {
                alert("You have successfully created an account!")
                navigate("/page-login")
            }
        })
    }

    console.log(userToCreate)

    return (
        <>
            <div className="login-page">
                <div className="log-form">
                    <form onSubmit={handleCreateSubmit}>
                        <input
                            name="name"
                            className="login-input"
                            onChange={handleCreateInputs}
                            type="text"
                            placeholder="enter your name"
                        />
                        <input
                            name="username"
                            className="login-input"
                            onChange={handleCreateInputs}
                            type="text"
                            placeholder="enter your username"
                        />
                        <input
                            name="email"
                            className="login-input"
                            onChange={handleCreateInputs}
                            type="text"
                            placeholder="enter your email"
                        />
                        <input
                            name="password"
                            className="login-input"
                            onChange={handleCreateInputs}
                            type="password"
                            placeholder="enter your password"
                        />
                        <button className="form-button" type="submit">
                        Create Account
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUser