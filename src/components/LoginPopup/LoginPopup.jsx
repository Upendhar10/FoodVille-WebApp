import React, { useState } from 'react'

import './LoginPopup.css'
import { assets } from '../../assets/assets'


function LoginPopup({setShowLogin}) {

  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} onClick={()=> setShowLogin(false)}/>
            </div>
            <div className='login-popup-inputs'>
              {
                currentState === "Sign In" 
                ? <></> 
                : <input type='text' placeholder='Enter your name' required/> 
              }
              <input type='email' placeholder='Enter your email' required/>
              <input type='password' placeholder='Enter your password' required/>
            </div>
            <button>
              {
                currentState === "Sign Up" 
                ? "Create account" 
                : "Sign In"
              }
            </button>
            {
              currentState === "Sign Up"
              ? <div className='login-popup-condition'>
                  <input type='checkbox' required/> 
                  {/* <p>By continuing, I agree to the terms of use & privacy policy</p>  */}
                  <p>I agree to all the terms and conditions</p> 
                </div> 
              : <></>
            }
            
            {
              currentState === "Sign In" 
              ? <p>Create a new account ? <span onClick={()=> setCurrentState("Sign Up")}>Click here</span></p>
              : <p>Already have an account ? <span onClick={()=> setCurrentState("Sign In")}>Sign In</span></p>
            }  
        </form>
    </div>
  )
}

export default LoginPopup