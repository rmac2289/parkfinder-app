/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import "./LoginForm.css";
import AuthApiService from "../services/AuthApiService";
import TokenService from "../services/TokenService";
import { LoginContext } from "../Contexts/LoginContext";
import { RedirectContext } from "../Contexts/RedirectContext";

export default function LoginForm() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [redirect, setRedirect] = useContext(RedirectContext);
  const [error, setError] = useState(null);
  const history = useHistory();

  // redirect user to page depending on their previous attempted route
  const onLoginSuccess = (user_name) => {
    sessionStorage.setItem("username", user_name.value);
    setLoggedIn(true);
    if (redirect === null) {
      history.push("/");
    } else {
      history.push(`/${redirect}`);
    }
    setRedirect(null);
  };

  // Auth verification on login
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError(null);
    const { user_name, password } = ev.target;
    console.log("user", user_name.value);
    console.log("pw", password.value);
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        if (TokenService.hasAuthToken()) {
          localStorage.setItem("user", user_name.value);
          return onLoginSuccess(user_name);
        }
        user_name.value = "";
        password.value = "";
      })
      .catch((res) => {
        console.log(res);
        setError("Error");
      });
  };
  return (
    <div
      className={
        !loggedIn && redirect
          ? "login-form login-form-with-message"
          : "login-form"
      }
    >
      {!loggedIn && (redirect === "addpark" || redirect === "commentlist") ? (
        <div className="addpark-login-message">
          <p className="addpark-login-message-p">
            You must be signed into an account to access comments or add a park
            - login below or{" "}
            <Link id="login-message-link" to="/signup">
              signup here
            </Link>
            .
          </p>
        </div>
      ) : null}
      <form className="login" onSubmit={handleSubmit}>
        <h1 id="login-header">Login</h1>
        {error !== null && (
          <div className="incorrect-login">
            <p className="incorrect-login-message-p">{error}</p>
          </div>
        )}
        <div className="input-container">
          <label htmlFor="user_name" className="login-label">
            username{" "}
          </label>
          <input id="user_name" name="user_name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="login-label">
            password
          </label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="button-container">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
