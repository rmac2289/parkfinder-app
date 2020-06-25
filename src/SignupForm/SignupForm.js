import React from 'react';
import './SignupForm.css'

export default function SignupForm() {
    return (
        <div className="signup-form">
            <form className="signup">
                <h1 id="signup-header">Signup</h1>
                <div className="input-container">
                    <label htmlFor="name" className="signup-label">name</label>
                <input id="name" name="name" type="text" />
                    
                </div>
                <div className="input-container">
                    <label htmlFor="username" className="signup-label">username</label>
                <input id="username" name="username" type="text" />
                   
                </div>
                <div className="input-container">
                    <label htmlFor="password" className="signup-label">password</label>
                <input id="password" name="password" type="password" /> 
                </div>
                <div className="button-container">
                <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}