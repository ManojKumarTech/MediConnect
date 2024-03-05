import React, { useState } from "react";
import { database } from "../firebase/setup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import '../App.css';


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
            ).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        }
        else {
            signInWithEmailAndPassword(database, email, password).then(ab => {
                console.log(ab, "authData")
                nav('/home')
            }
            ).catch(err => {
                alert(err.code)
            })
        }
    }

    return (
        <div className="" style={{ textAlign: "center", marginTop: 30 }}>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div className={login == true ? 'ac' : 'pointer'} onClick={() => setLogin(true)}>SignIn</div>
                <div className={login == false ? 'ac' : 'pointer'} onClick={() => setLogin(false)}>SignUp</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <br></br>

            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                <input name="email" placeholder="Enter Email" /><br></br><br></br>
                <input name="password" type="password" placeholder="EnterPassword" /><br></br><br></br>
                <button>{login ? "SingIn" : "Signup"}</button>
            </form>
            <a href="/sample"><h1>Sample</h1></a>


        </div>
    )
}
export default Registration