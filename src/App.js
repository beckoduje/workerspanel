import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInActions } from "./store/isLoggedIn-slice";
import { ApplicationProvider } from "./context/application-context";

import { fetchRegisteredUsers } from "./store/fetch-actions";
import { fetchWorkers } from "./store/fetch-actions";

import "./css/style.css";

import Navigation from "./components/shared/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import SearchedWorkers from "./pages/SearchedWorkers";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const workers = useSelector((state) => state.workers.workers);

  // čuvanje login stanja u LS da korisnik ostane ulogiran
  const IS_LOGGED_KEY = "isLogged";

  useEffect(() => {
    const isLoggedJSON = localStorage.getItem(IS_LOGGED_KEY);
    if (isLoggedJSON != null && JSON.parse(isLoggedJSON) === true) {
      dispatch(isLoggedInActions.logUserIn());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(IS_LOGGED_KEY, JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // fetchanje registriranih korisnika
  useEffect(() => {
    dispatch(fetchRegisteredUsers());
  }, [dispatch]);

  // fetchanje radnika na pokretanje stranice ako nisu fetchani već prije
  useEffect(() => {
    if (workers.lenght > 0) {
      return;
    }
    dispatch(fetchWorkers());
  }, [dispatch]);

  return (
    <ApplicationProvider>
      <div className="global-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route
            path="/searched-workers/:worker"
            element={<SearchedWorkers />}
          />
        </Routes>
      </div>
    </ApplicationProvider>
  );
}

export default App;
