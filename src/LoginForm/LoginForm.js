import React from 'react';
import './LoginForm.css'

export default function LoginForm() {
    return (
        <div className="login-form">
            <form className="login">
                <h1 id="login-header">Login</h1>
                <div className="input-container">
                    <label htmlFor="username" className="login-label">username </label>
                <input id="username" name="username" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="password" className="login-label">password</label>
                <input id="password" name="password" type="password" />
                </div>
                <div className="button-container">
                <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}