import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css'
import { LoginContext } from '../Contexts/LoginContext';
import AuthApiService from '../services/AuthApiService';
import TokenService from '../services/TokenService';

export default function LoginForm() {
    const [setLoggedIn] = useContext(LoginContext);
    const [error, setError] = useState(null);
    const history = useHistory();

    const onLoginSuccess = (user_name) => {
        sessionStorage.setItem('username', user_name.value);
        history.push('/');
      };

    const handleSubmit = ev => {
        ev.preventDefault();
        setError(null);
        const { user_name, password } = ev.target;
     
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            TokenService.saveAuthToken(res.authToken);
            if (TokenService.hasAuthToken()){
              return onLoginSuccess(user_name) 
            };
            user_name.value = ''
            password.value = ''
            setLoggedIn(true)
          })
          .catch(res => setError(res.error))
      };
    return (
        <div className="login-form">
            <form className="login" onSubmit={handleSubmit}>
                <h1 id="login-header">Login</h1>
                <div className="input-container">
                    <label htmlFor="user_name" className="login-label">username </label>
                <input id="user_name" name="user_name" type="text" />
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