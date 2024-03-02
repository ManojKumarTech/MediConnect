import React, { useState } from "react";
import { database } from "../firebase/setup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


function Registration() {

    const [login, setLogin] = useState(false)

    const nav = useNavigate()

    const handleSubmit = (e, a) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (a == 'signup') {
            createUserWithEmailAndPassword(database, email, password).then(ab => {
                console.log(ab, "authData")
                nav('/home')
            }
            ).catch(err=>{
                alert(err.code)
                setLogin(true)
            })
        }
        else {
            signInWithEmailAndPassword(database, email, password).then(ab => {
                console.log(ab, "authData")
                nav('/home')
            }
            ).catch(err=>{
                alert(err.code)
            })
        }
    }

    return (
        <div className="App" style={{}}>
            <h1>{login ? "SingIn" : "Signup"}</h1>
            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                <input name="email" placeholder="Enter Email" />
                <input name="password" type="password" placeholder="EnterPassword" />
                <button>{login ? "SingIn" : "Signup"}</button>
            </form>
            <h1>Hello</h1>

        </div>
    )
}
export default Registration