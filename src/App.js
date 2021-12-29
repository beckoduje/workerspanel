import { Routes, Route, Navigate } from "react-router-dom";
import { ApplicationProvider } from "./context/application-context";

import "./css/style.css";

import Navigation from "./components/shared/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import SearchedWorkers from "./pages/SearchedWorkers";

function App() {
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
