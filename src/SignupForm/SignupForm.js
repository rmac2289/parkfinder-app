import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";
import AuthApiService from "../services/AuthApiService";

export default function SignupForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  // route user to login page if signup successful
  useEffect(() => {
    if (success) {
      history.push("/login");
    }
  });

  // posts user info on signup
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, user_name, password } = e.target;

    setError(null);
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      email: email.value,
    })
      .then((user) => {
        full_name.value = "";
        email.value = "";
        user_name.value = "";
        password.value = "";

        setSuccess(true);
      })
      .catch((res) => {
        setError(res.error);
      });
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSignupSubmit} className="signup">
        <div role="alert" className="failed-signup">
          {error && <p className="failed-signup-message">{error}</p>}
        </div>
        <h1 id="signup-header">Signup</h1>
        <div className="input-container">
          <label htmlFor="full_name" className="signup-label">
            name
          </label>
          <input id="full_name" name="full_name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="signup-label">
            email*
          </label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="user_name" className="signup-label">
            username*
          </label>
          <input id="user_name" name="user_name" type="text" required />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="signup-label">
            password*
          </label>
          <input id="password" name="password" type="password" required />
        </div>
        <div className="button-container">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
