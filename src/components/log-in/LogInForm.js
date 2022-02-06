import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoggedInActions } from "../../store/isLoggedIn-slice";
import { ApplicationContext } from "../../context/application-context";

export default function LogInForm() {
  const dispatch = useDispatch();

  const { registeredUsers } = useContext(ApplicationContext);
  const [userInputs, setUserInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });

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

  // function emailChecker(registeredUsers, userInputs) {
  //   if (registeredUsers.some((user) => user.email === userInputs.email)) {
  //     setErrors((prevErrors) => {
  //       return {
  //         ...prevErrors,
  //         email: false,
  //       };
  //     });
  //     return true;
  //   } else {
  //     setErrors((prevErrors) => {
  //       return {
  //         ...prevErrors,
  //         email: true,
  //       };
  //     });
  //     return false;
  //   }
  // }

  function isRegisteredCheck(registeredUsers, userInputs) {
    let isCredentialsOk;
    let emailCheck = true;
    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].email === userInputs.email) {
        emailCheck = false;
        if (registeredUsers[i].password !== userInputs.password) {
          setErrors((prevErrors) => {
            return {
              ...prevErrors,
              password: true,
            };
          });
        } else {
          isCredentialsOk = true;
        }
        break;
      }
    }
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        email: emailCheck,
      };
    });
    return isCredentialsOk;
  }

  // function inputFieldChecker(registeredUsers, userInputs, inputField) {
  //   if (
  //     registeredUsers.some((user) => user.inputField === userInputs.inputField)
  //   ) {
  //     setErrors((prevErrors) => {
  //       return {
  //         ...prevErrors,
  //         [inputField]: false,
  //       };
  //     });
  //     console.log("IMmmmmaaaa");
  //     console.log(inputField);
  //   } else {
  //     setErrors((prevErrors) => {
  //       return {
  //         ...prevErrors,
  //         [inputField]: true,
  //       };
  //     });
  //   }
  // }

  // function checkPassword

  // Function that checks credentials
  function loggInUser(e, registeredUsers, userInputs) {
    e.preventDefault();
    const isUserFound = isRegisteredCheck(registeredUsers, userInputs);
    // inputFieldChecker(registeredUsers, userInputs, "email");
    // inputFieldChecker(registeredUsers, userInputs, "password");
    console.log(isUserFound);
    if (isUserFound) {
      // setIsLogged(true);
      dispatch(isLoggedInActions.logUserIn());
      navigate("/home", { replace: true });
    }
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  // email group
  const emailInputClass = errors.email ? "error" : "";
  const emailErrorMsgClass = errors.email
    ? "log-in-form__warning-msg active"
    : "log-in-form__warning-msg";
  // password group
  const passwordInputClass = errors.password ? "error" : "";
  const passwordErrorMsgClass = errors.password
    ? "log-in-form__warning-msg active"
    : "log-in-form__warning-msg";

  return (
    <form className="log-in-form" action="#" method="#">
      <h1 className="log-in-form__title">Log In</h1>

      <div className="log-in-form__input-group">
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
      <div className="log-in-form__input-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="***"
          onChange={(e) => setUserInputsHandler(e, "password")}
          className={passwordInputClass}
        />
        <div className="log-in-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Password error</span>
        </div>
      </div>
      <button
        className="log-in-form__submit-button"
        type="submit"
        onClick={(e) => loggInUser(e, registeredUsers, userInputs)}
      >
        Log in
      </button>
    </form>
  );
}
