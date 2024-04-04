import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { database } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Registration() {
    const [login, setLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const nav = useNavigate();

    const handleSubmit = (e, action) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (action === 'signup') {
            createUserWithEmailAndPassword(database, email, password)
                .then(() => nav('/home'))
                .catch(()=> setErrorMessage("Email Already in use !"));
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then(() => nav('/home'))
                .catch(()=> setErrorMessage("Email Id or PassWord is wrong !"));
        }
    }

    return (
        <div className="bg">
            <div className="card registration-card">
                <div className="card-header">
                    <div className={`registration-tab ${!login ? 'active' : ''}`} onClick={() => setLogin(false)}>Sign Up</div>
                    <div className={`registration-tab ${login ? 'active' : ''}`} onClick={() => setLogin(true)}>Sign In</div>
                </div>

                <div className="card-body">
                    <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                        <input className="registration-input" name="email" placeholder="Enter Email" /><br /><br />
                        <input className="registration-input" name="password" type="password" placeholder="Enter Password" /><br /><br />
                        <button className="registration-button">{login ? "Sign In" : "Sign Up"}</button>
                    </form>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
}

export default Registration;
