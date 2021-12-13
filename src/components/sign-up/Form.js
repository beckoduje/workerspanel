import React from "react";

export default function Form() {
  return (
    <form className="sign-up-form" action="#" method="#">
      <h1 className="sign-up-form__title">Sign Up</h1>
      <div className="sign-up-form__input-group">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter first name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="last-name">Last name:</label>
        <input id="last-name" type="text" />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter last name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <div className="sign-up-form__warning-msg" id="email-warr">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter proper email address</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter a password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input id="confirm-password" type="password" />
        <div className="sign-up-form__warning-msg" id="pass-confirmation">
          <i className="fas fa-exclamation-circle"></i>
          <span className="sign-up-form__mismatch-msg">Confirm password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group sign-up-form__input-group--checkbox">
        <input type="checkbox" id="checkbox" />
        <label>
          I accept the{" "}
          <a href="#" className="sign-up-form__term-priv-links">
            Terms of Use
          </a>{" "}
          &#38;{" "}
          <a href="#" className="sign-up-form__term-priv-links">
            Privacy Policy
          </a>
        </label>
        <div className="sign-up-form__warrning-msg sign-up-form__warrning-msg--checkbox-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Please accept the terms to proceed</span>
        </div>
      </div>
      <button className="sign-up-form__submit-button" type="submit">
        Sign Up
      </button>
    </form>
  );
}
