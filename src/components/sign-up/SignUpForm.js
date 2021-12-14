import React, { useState } from "react";

const registeredUsers = [
  {
    name: "Duje",
    surname: "Becko",
    mail: "dujebecko@gmail.com",
    password: "Bozenko",
  },
  {
    name: "Bozena",
    surname: "Becko",
    mail: "bozenabecko@gmail.com",
    password: "Bozenko12",
  },
  {
    name: "Biky",
    surname: "Fabi",
    mail: "biky@gmail.com",
    password: "biky12345",
  },
];

console.log(registeredUsers);

export default function SignUpForm() {
  const [userInputs, setUserInputs] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  // const signUpUser = (emailInput) => {
  //   const isRegistered = registeredUsers.some(
  //     (user) => user.mail === emailInput
  //   );
  //   console.log("Radi funkcija");
  //   console.log(isRegistered);
  //   console.log(emailInput);
  // };

  /*
  const onClick = () => {
// Do this:
setPerson(prevPerson => {
return {
...prevPerson,
age: prevPerson.age + 1
}
})
  */

  console.log(userInputs);

  function setUserInputsHandler(e, key) {
    setUserInputs((prevUserInputs) => {
      return {
        ...prevUserInputs,
        key: e.target.value,
      };
    });
  }

  return (
    <form className="sign-up-form" action="#" method="#">
      <h1 className="sign-up-form__title">Sign Up</h1>
      <div className="sign-up-form__input-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          // onChange={(e) =>
          //   setUserInputs((prevUserInputs) => {
          //     return {
          //       ...prevUserInputs,
          //       name: e.target.value,
          //     };
          //   })
          // }
          onChange={(e) => setUserInputsHandler(e, "name")}
        />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter first name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="last-name">Last name:</label>
        <input id="last-name" type="text" placeholder="last name" />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter last name</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="example@example.com" />
        <div className="sign-up-form__warning-msg" id="email-warr">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter proper email address</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="***" />
        <div className="sign-up-form__warning-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Enter a password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input id="confirm-password" type="password" placeholder="***" />
        <div className="sign-up-form__warning-msg" id="pass-confirmation">
          <i className="fas fa-exclamation-circle"></i>
          <span className="sign-up-form__mismatch-msg">Confirm password</span>
        </div>
      </div>
      <div className="sign-up-form__input-group sign-up-form__input-group--checkbox">
        <div className="sign-up-form__terms-wrapper">
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
        </div>
        <div className="sign-up-form__warning-msg sign-up-form__warrning-msg--checkbox-msg">
          <i className="fas fa-exclamation-circle"></i>
          <span>Please accept the terms to proceed</span>
        </div>
      </div>
      <button
        className="sign-up-form__submit-button"
        type="text"
        // onClick={() => signUpUser()}
      >
        Sign Up
      </button>
    </form>
  );
}
