import React, { useState, useRef, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { ApplicationContext } from "../../context/application-context";

export const registeredUsers = [
  {
    name: "Duje",
    lastName: "Becko",
    email: "dujebecko@gmail.com",
    password: "Bozenko",
    id: 1,
  },
  {
    name: "Bozena",
    lastName: "Becko",
    email: "bozenabecko@gmail.com",
    password: "Bozenko12",
    id: 2,
  },
  {
    name: "Biky",
    lastName: "Fabi",
    email: "biky@gmail.com",
    password: "biky12345",
    id: 3,
  },
  {
    name: "Lupo",
    lastName: "Becko",
    email: "lupo@gmail.com",
    password: "lupocito",
    id: 4,
  },
  {
    name: "Shiva",
    lastName: "Shivic",
    email: "shiva@gmail.com",
    password: "shiva123",
    id: 5,
  },
  {
    name: "Beky",
    lastName: "Roberts",
    email: "beky@gmail.com",
    password: "beky123",
    id: 6,
  },
  {
    name: "Ante",
    lastName: "Beko",
    email: "ante@gmail.com",
    password: "ante123",
    id: 7,
  },
  {
    name: "Shadow",
    lastName: "Beko",
    email: "shadow@gmail.com",
    password: "shadow123",
    id: 8,
  },
];

export default function SignUpForm({ setExistingUserModal }) {
  const { setIsLogged } = useContext(ApplicationContext);
  // Object that holds all the inputs from user
  const [userInputs, setUserInputs] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  // states for errors
  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    confirmedPassword: false,
    checkbox: false,
  });

  const checkboxRef = useRef();

  const navigate = useNavigate();

  // function that updates states with user inputs for every input. Triggered with onCHange
  function setUserInputsHandler(e, key) {
    setUserInputs((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [key]: e.target.value,
      };
    });
  }

  // function that checks is there user with the same email in base of registered users and return boolean
  function isUserRegistered(registeredUsers, typedEmail) {
    return registeredUsers.some((user) => user.email === typedEmail);
  }

  // function that checks individual inputs and updates errors
  function checkUserInputs(userInputs) {
    setErrors({
      name: !userInputs.name ? true : false,
      lastName: !userInputs.lastName ? true : false,
      email:
        !userInputs.email || !userInputs.email.includes("@") ? true : false,
      password: !userInputs.password ? true : false,
      confirmedPassword:
        !userInputs.confirmedPassword ||
        userInputs.confirmedPassword !== userInputs.password
          ? true
          : false,
      checkbox: !checkboxRef.current.checked ? true : false,
    });
  }

  // function for pushing user into registered useres
  function registerUserHandler(registeredUsers, userInputs, errors) {
    const isThereError = Object.values(errors).includes(true);
    if (isThereError || !userInputs.name) return;
    registeredUsers.push({
      name: userInputs.name,
      lastName: userInputs.lastName,
      email: userInputs.email,
      password: userInputs.password,
    });
    setIsLogged(true);
    navigate("/home", { replace: true });
  }

  // function for form submition
  function submitFormHandler(e, registeredUsers, userInputs) {
    e.preventDefault();
    // check is there registered user with current email
    const isFound = isUserRegistered(registeredUsers, userInputs.email);
    if (isFound) {
      setExistingUserModal(true);
      return;
    }
    checkUserInputs(userInputs);
  }

  useEffect(() => {
    registerUserHandler(registeredUsers, userInputs, errors);
  }, [errors]);

  // name group
  const nameInputClass = errors.name ? "error" : "";
  const nameErrorMsgClass = errors.name
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";
  // last name group
  const lastNameInputClass = errors.lastName ? "error" : "";
  const lastNameErrorMsgClass = errors.lastName
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";
  // email group
  const emailInputClass = errors.email ? "error" : "";
  const emailErrorMsgClass = errors.email
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";
  // password group
  const passwordInputClass = errors.password ? "error" : "";
  const passwordErrorMsgClass = errors.password
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";
  // confirmed password group
  const confirmedPasswordInputClass = errors.confirmedPassword ? "error" : "";
  const confirmedPasswordErrorMsgClass = errors.confirmedPassword
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";

  // checkbox class
  const checkboxClass = errors.checkbox
    ? "sign-up-form__warning-msg active"
    : "sign-up-form__warning-msg";

  return (
    <form className="sign-up-form" action="#" method="#">
      <h1 className="sign-up-form__title">Sign Up</h1>
      <div className="sign-up-form__input-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          onChange={(e) => setUserInputsHandler(e, "name")}
          className={nameInputClass}
        />
        <div className={nameErrorMsgClass}>
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter first name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="last-name">Last name:</label>
        <input
          id="last-name"
          type="text"
          placeholder="last name"
          onChange={(e) => setUserInputsHandler(e, "lastName")}
          className={lastNameInputClass}
        />
        <div className={lastNameErrorMsgClass}>
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter last name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setUserInputsHandler(e, "email")}
          className={emailInputClass}
        />
        <div className={emailErrorMsgClass} id="email-warr">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter proper email address</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="***"
          onChange={(e) => setUserInputsHandler(e, "password")}
          className={passwordInputClass}
        />
        <div className={passwordErrorMsgClass}>
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter a password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="***"
          onChange={(e) => setUserInputsHandler(e, "confirmedPassword")}
          className={confirmedPasswordInputClass}
        />
        <div className={confirmedPasswordErrorMsgClass} id="pass-confirmation">
          <i className="fas fa-exclamation-circle"></i>
          <span className="sign-up-form__mismatch-msg">Confirm password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group sign-up-form__input-group--checkbox">
        <div className="sign-up-form__terms-wrapper">
          <input type="checkbox" id="checkbox" ref={checkboxRef} />
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
        </div>
        <div className={checkboxClass}>
          <i className="fas fa-exclamation-circle"></i>
          <span>Please accept the terms to proceed</span>
        </div>
      </div>
      <button
        className="sign-up-form__submit-button"
        type="text"
        onClick={(e) =>
          submitFormHandler(e, registeredUsers, userInputs, errors)
        }
      >
        Sign Up
      </button>
    </form>
  );
}
