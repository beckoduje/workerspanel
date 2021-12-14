import React from "react";
import LogInForm from "../components/log-in/LogInForm";

// testni primjer
// import { useSelector } from "react-redux";

export default function LogIn() {
  // const isLoggedIn = useSelector((state) => state.isLogged.isLogged);
  // console.log(isLoggedIn);
  return (
    <section className="log-in-section">
      <LogInForm />
    </section>
  );
}
