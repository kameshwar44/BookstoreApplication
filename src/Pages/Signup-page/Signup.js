import React from 'react'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import AuthBgImg from '../../assets/auth-bg.jpg'
import './signup.css'

function Signup() {
  return (
    <>
    <Navbar/>
    <section className="signup-container">
        <div className='signup-img-container'>
            <img src={AuthBgImg} alt="authentication-background" />
        </div>
        <div className="signup-content-container">
            <div className="container">
                <div className="content-wrapper">
                    <h2>Signup</h2>
                    <p>Create a new account with email and password.</p>

                    {/* <AuthForm buttonName="Sign Up" /> */}
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Signup
