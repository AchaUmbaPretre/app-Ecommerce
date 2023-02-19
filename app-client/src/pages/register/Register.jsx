import React from 'react'
import './register.css'

const Register = () => {
  return (
    <>
        <div className="register">
          <div className="register-contenaire">
            <h2 className="register-title">CREATE AN ACCOUNT</h2>
            <div className="register-row">
                <input type="text" placeholder="nom" className="register-input" />
                <input type="text" placeholder="prenom" className="register-input" />
                <input type="text" placeholder="postnom" className="register-input" />
                <input type="text" placeholder="email" className="register-input" />
                <input type="text" placeholder="password" className="register-input" />
                <input type="text" placeholder="confirme password" className="register-input" />
            </div>
            <a href="" className="register-link">By creating an account, I consent to the processing of personnal data in accordance whit the <b>PRIVACY POLICY</b></a>
             <button className="register-btn">CREATE</button>
          </div>
        </div>
    </>
  )
}

export default Register