import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="login-container">
                <h2 className='login-title'>SIGN IN</h2>
                <input type="text" placeholder="username" className="login-input" />
                <input type="text" placeholder="password" className="login-input" />
                <button className="login-btn">LOGIN</button>
                <div className="wrapper-link">
                    <a href="" className="login-link">DO NOT YOU REMEMBER THE PASSWORD ?</a>
                    <a href="" className="login-link">CREATE A NEW ACCOUNT</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login