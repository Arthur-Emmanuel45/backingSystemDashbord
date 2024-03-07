import React, {useState} from 'react';
import './signUp.css';
import '../fontawesome-free-6.5.1-web/css/all.css';
import imgLogo from '../Images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebaseConfig";

const SignUp = () => {
    const[registerEmail, setRegisterEmail] = useState("");
    const[registerPassword, setRegisterPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[errorPassword, setErrorPassword] = useState("");
    const[loading, setLoading] = useState(false);
    const[styleErrorPassword, setStyleErrorPassword] = useState(false);
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault();

        if(registerPassword !== confirmPassword) {
            setStyleErrorPassword(true)
            return (
                setErrorPassword("password does not match")
            )
        }else {
            setStyleErrorPassword(false)
        }
        try {
            setErrorPassword("");
            setLoading(true);
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail, 
                registerPassword,
            );
            navigate("/dashboard")
            console.log(user);
        }catch(error) {
            console.log(error.message);
        }
        setLoading(false);
    };

    return (
        <div id="register" onSubmit={register}>
            <div id="header">
                <img src={imgLogo} alt="Logo"/>
                <h1>Create an Account</h1>
            </div>
            <div className={styleErrorPassword ? "password-error" : ''} 
                onChange={(e) => {
                    setStyleErrorPassword(e.target.value);
                }}   
            >   {errorPassword}
            </div>
            <form id="signup-form">
                <a href="/#" className="logAccount">
                    <i className="fa-brands fa-google"></i>
                    Signup with Google
                </a>
                <a href="/#" className="logAccount">
                    <i className="fa-brands fa-facebook"></i>
                    Signup with Twitter
                </a>
                <a href="/#" className="logAccount">
                    <i className="fa-brands fa-twitter"></i>
                    Signup with Twitter
                </a>
                <div id="rule">
                    <hr/>
                    <p>OR</p>
                    <hr/>
                </div>
                <div className="register-form">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your first name"/>
                </div>
                <div className="register-form">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your surname name"/>
                </div>
                <div className="register-form">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" value={registerEmail}
                        onChange={(e) => {
                            setRegisterEmail(e.target.value);
                        }}   
                    />
                </div>            
                <div className="register-form">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={registerPassword} 
                        onChange={(e) => {
                            setRegisterPassword(e.target.value);
                        }}
                    />
                </div>            
                <div className="register-form">
                    <label>confirm password</label>
                    <input type="password" placeholder="Enter confirm password" value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" disabled={loading}>Register</button>
            </form>
            <div id="alt-login">
                <hr className="h-lines"/>
                <i>Have an account</i>
                <Link to={"/backingSystemDashbord"}>
                    <i id="hrefLogin">Login</i>
                </Link>
                <hr className="h-lines"/>
            </div> 
        </div>
    )
}
export default SignUp