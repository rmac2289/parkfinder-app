import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LoginForm.css'
import AuthApiService from '../services/AuthApiService';
import TokenService from '../services/TokenService';
import { LoginContext } from '../Contexts/LoginContext';
import { RedirectContext } from '../Contexts/RedirectContext';

export default function LoginForm() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [redirect, setRedirect] = useContext(RedirectContext)
    const [error, setError] = useState(null);
    const history = useHistory();
  
    const onLoginSuccess = (user_name) => {
        sessionStorage.setItem('username', user_name.value);
        setLoggedIn(true);
        if (redirect === null){
            history.push('/')
        } else {
        history.push(`/${redirect}`);
        }
        setRedirect(null);
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
          })
          .catch(res => setError(res.error))
      };
    return (
        <div className="login-form">
            {!loggedIn && redirect === 'addpark' ? <div className="addpark-login-message">
                <p className="addpark-login-message-p">You have to be signed into an account to add a park - login below or <Link to="/signup">signup here</Link>.</p>
            </div>: null}
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