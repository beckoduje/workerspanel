import React from "react";

export default function LogInForm() {
  return (
    <form className="log-in-form" action="#" method="#">
      <h1 className="log-in-form__title">Log In</h1>

      <div className="log-in-form__input-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="example@example.com" />
        <div className="log-in-form__warning-msg" id="email-warr">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter proper email address</span>
        </div>
      </div>
      <div className="log-in-form__input-group">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="***" />
        <div className="log-in-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter a password</span>
        </div>
      </div>
      <button className="log-in-form__submit-button" type="submit">
        Log in
      </button>
    </form>
  );
}
