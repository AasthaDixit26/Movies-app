import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login=()=>{
    const [email,setEmail]=useState('');
    const navigate=useNavigate();


    return(
        <>
        <h1>Login</h1>

        </>
    )

}
export default Login;