import React from "react";
import './script.js';
import './Dashboard.css';
import imgLogo from '../Images/logo.png'
import profilePic from '../Images/profile_pix.jpg'
import map from '../Images/map.jpg'
import '../fontawesome-free-6.5.1-web/css/all.css'
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig.js";

const SignOut = async () => {
    try{
        await signOut(auth)
    }catch{
        alert("login failed")
    }
}

const Dashboard = () => {
    return(
        <div id="home">
            <header>
                <img src={imgLogo} alt="logo" id="logo-img"/>
                <div id="menu-mobile">
                    <i className="fa fa-bars"></i>
                </div>
                <nav>
                    <div id="flex-nav">
                        <div className="style">
                            <i className="fa fa-gauge-high style-menu">Dashboard</i>
                        </div>                
                        <div className="style">
                            <i className="fa fa-chart-bar style-menu">Insight</i>
                        </div>                
                        <div className="style">
                            <i className="fa fa-file style-menu">Transaction</i>
                        </div>                
                        <div className="style">
                            <i className="fa fa-user style-menu">Account</i>
                        </div>                
                        <div className="style">
                            <i className="fa fa-bell style-menu">Notification</i>
                        </div>
                        <div className="style">
                            <i className="fa fa-gear style-menu">Settings</i>
                        </div>
                        <div className="style">
                            <i className="fa fa-sign-out style-menu" onClick={SignOut}>Logout</i>
                        </div>
                    </div>

                    <i fa className="fa fa-question-circle">Help</i>
                </nav>
            </header>
            <section id="all-right">
                <div id="user-account">
                    <div id="user-detiles">
                        <img src={profilePic} id="profile-pic" alt="profile pic"/>
                        <div id="user">
                            <h5>Emmanuel Arthur</h5>
                            <p>Software engineering</p>
                        </div>
                    </div>
                    <div id="search-box">
                        <input type="search" placeholder="search here..."/>
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <h2>Dashboard</h2>
                <section id="statistic-container">
                    <div id="balance">
                        <p>Balance</p>
                        <p>$100, 000</p>
                    </div>
                    <div id ="stat-container">
                        <div id="statistic-head">
                            <h3>Statistic</h3>
                            <div>
                                <i className="fa fa-sliders"></i>
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="stat-text">
                                <i className="far fa-file"></i>
                                <div>
                                    <span>Task A</span>
                                    <p className="stat-money">+$1000</p>
                                </div>
                            </div>
                            <div className="status-container">
                                <i className="fa fa-toggle-off switch-toggle"></i>
                                <p className="status">In progress</p>
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="stat-text">
                                <i className="far fa-file"></i>
                                <div>
                                    <span>Task B</span>
                                    <p className="stat-money">+$1050</p>
                                </div>
                            </div>
                            <div className="status-container">
                                <i className="fa fa-toggle-off switch-toggle"></i>
                                <p className="status">In progress</p>
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="stat-text">
                                <i className="far fa-file"></i>
                                <div>
                                    <span>Task C</span>
                                    <p className="stat-money">+$105050</p>
                                </div>
                            </div>
                            <div className="status-container">
                                <i className="fa fa-toggle-off switch-toggle"></i>
                                <p className="status">In progress</p>
                            </div>
                        </div>
                    </div>
                    <div id="chart">
                        <div id="gauge-chart">
                            <span id="gauge"><i>50%</i></span>
                        </div>
                        <div id="comp-revenue">
                            <p>Company Revenue</p>
                            <p>+ $10000000</p>
                        </div>
                        <div className="rev-icon">
                            <i className="fa fa-chart-line"></i>
                            <p className="revenue-value">30%</p>
                        </div>
                    </div>
                </section>
                <section id="right-container">
                    <div className="save-container">
                        <div id="save-chart-header">
                            <h4>My Save Chart</h4>
                            <i className="fa fa-arrow-right"></i>
                        </div>
                        <div className="save-chart">
                            <i className="fa fa-phone"></i>
                            <div className="save-text">
                                <p>Phone Atempt</p>
                                <p>1 Company, 1 Region, 2 Month Ago</p>
                            </div>
                            <div className="rev-set">
                                <i className="fa fa-chart-line"></i>
                                <p className="revenue-value">25%</p>
                            </div>
                        </div>
                        <div className="save-chart">
                            <i  className="fa fa-phone"></i>
                                <div className="save-text">
                                    <p>Phone In</p>
                                    <p>2 Company, 1 Region, 1 Month Ago</p>
                                </div>
                            <div className="rev-set">
                                <i className="fa fa-chart-line"></i>
                                <p className="revenue-value">15%</p>
                            </div>
                        </div>
                        <div className="save-chart">
                            <i className="fas fa-address-book"></i>
                            <div className="save-text">
                                <p>Contact</p>
                                <p>1 Company, 1 Region, 1 Month Ago</p>
                            </div>
                            <div className="rev-set">
                                <i className="fa fa-chart-line"></i>
                                <p className="revenue-value">50%</p>
                            </div>
                        </div>
                    </div>
                    <div className="save-container">
                        <div id="save-chart-header">
                            <h4>Country Satatistic</h4>
                            <i className="fa fa-arrow-right"></i>
                        </div>
                        <div id="location">
                            <img src={map} alt="map" id="map"/>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Dashboard