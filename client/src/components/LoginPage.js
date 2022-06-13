import React from 'react'
import { Link } from "react-router-dom";

function LoginPage({userToLogin, setUserToLogin, handleLoginSubmit}) {

    const handleLoginInputs = (e) => {
        setUserToLogin({...userToLogin,
            [e.target.name]: e.target.value,
        })
    }
    
    return (
        <>
            <div className="login-page">
                <div className="log-form">
                    <form onSubmit={handleLoginSubmit}>
                        <input
                            name="username"
                            className="login-input"
                            onChange={handleLoginInputs}
                            type="text"
                            placeholder="username"
                        />
                        <input
                            name="password"
                            className="login-input"
                            onChange={handleLoginInputs}
                            type="password"
                            placeholder="password"
                        />
                        <button className="form-button" type="submit">
                        Login
                        </button>
                        <p className="sign-message">
                        Not registered? <Link to="create-account">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage