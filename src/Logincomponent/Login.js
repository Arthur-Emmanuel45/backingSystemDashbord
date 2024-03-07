import React, {useState} from 'react'
import './Login.css'
import '../fontawesome-free-6.5.1-web/css/all.css'
import imgLogo from '../Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebaseConfig";

const Login = () => {
    const[loginEmail, setloginEmail] = useState("");
    const[loginPassword, setloginPassword] = useState("");
    const[errorPassword, setErrorPassword] = useState("");
    const[loading, setLoading] = useState(false);
    const[styleErrorPassword, setStyleErrorPassword] = useState(false);
    const navigate  = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        try {
            setErrorPassword("");
            setLoading(true);
            setStyleErrorPassword(false);
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            navigate("/dashboard")
            console.log(user);
        }catch(error) {
            console.log(error.message);
            setErrorPassword("Failed to Signin")
            setStyleErrorPassword(true)
        }  
        setLoading(false);     
    };

    return (
        <div id='form-background' onSubmit={login}>
            <form>
                <div id="header">
                    <img src={imgLogo} alt="Logo"/>
                    <h1>Login</h1>
                </div>
                <p>Hi, Welcome back</p>
                
                <div className={styleErrorPassword ? "password-error" : ''} 
                onChange={(e) => {
                    setStyleErrorPassword(e.target.value);
                }}   
                >   
                    {errorPassword}
                </div>

                <a href="/#" className="logInAccount">
                    <i className="fa-brands fa-google"></i>
                    Login with Google
                </a> 
                <a href="/#" className="logInAccount">
                    <i className="fa-brands fa-facebook"></i>
                    Login with Twitter
                </a>
                <a href="/#" className="logInAccount">
                    <i className="fa-brands fa-twitter"></i>
                    Login with Twitter
                </a>  
                <div id="alt-login">
                    <hr className="h-lines"/>
                    or Login with Email
                    <hr className="h-lines"/>
                </div>  
                <div className="form-content">
                    <label>Email</label>
                    <input type="email" placeholder="Eg: johnArthur@gmail.com" value={loginEmail}
                        onChange={(e) => {
                            setloginEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="form-content">
                    <label>password</label>
                    <input type="password" placeholder="Enter your password" value={loginPassword}
                        onChange={(e) => {
                            setloginPassword(e.target.value);
                        }}
                    />
                </div>
                <div id="password-recovery">
                    <div id="checkbox">
                        <input type="checkbox"/>
                        <label>Remember Me</label>
                    </div>
                    <a href="/#" target="_blank" id="passwordStyle">ForgetPassword?<i className="fa fa-up-right"></i></a>
                </div>
                <button id="login-button" type="submit" onClick={login} disabled={loading}>Login</button>  
                <div id="alt-login">
                    <hr className="h-lines"/>
                    <i>or</i>
                    <Link to={"/signUp"}>
                        <i id = "create-account-link">Create an Account</i>
                    </Link>
                    <hr className="h-lines"/>
                </div>      
            </form>
        </div>

    )    
}

export default Login