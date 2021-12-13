import { Routes, Route, Navigate } from "react-router-dom";

import "./css/style.css";

import Navigation from "./components/shared/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="global-wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
