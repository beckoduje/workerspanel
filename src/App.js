import "./css/style.css";

import Navigation from "./components/shared/Navigation";
import Header from "./components/home/Header";

function App() {
  return (
    <div className="global-wrapper">
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
