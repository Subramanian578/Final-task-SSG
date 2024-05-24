import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Login(props) {
  const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [loginStatus,setLoginStatus]=useState("");

const login =()=>{
    axios.post("http://localhost:3001/login",{
        email:email,
        password:password
    }).then((response)=>{
        console.log(response);
        if(response.data.message){
            setLoginStatus(response.data.message);

        }else {
         
            navigate('/bookc', { state: { userData: response.data[0] } });
        }
    }).catch((error)=>{
        console.log(error);
    });
    };

    return (
        <>
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} /><br/>
            <button onClick={login}>Login</button>
            <h5>If you have accout login or click the below link ad register</h5>
            <h3><Link to='/register'>Register here!</Link></h3>
              <h3>{loginStatus}</h3>
        </div>
            </>
    );
}

export default Login;