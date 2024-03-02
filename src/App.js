import React from 'react'
import './App.css';
import Dashboard from './HomeComponent/Dashboard';
import Login from './Logincomponent/Login';
import SignUp from './RegistorComponent/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Login />}/>
          <Route path="/signUp" element = {<SignUp />} />
          <Route path="/dashboard" element= {<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
