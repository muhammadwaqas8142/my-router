import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts"; 
import TextForm from "./components/TextForm"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import

// Define or import Home component
const Home = () => {
  return <h1>Home Page</h1>;
};

function App() {
  const [change_mode, dmode] = useState("light");
  const change_modes = () => { 
    if (change_mode === "light") {
      dmode("dark");
    } else {
      dmode("light");
    }
  };

  return (
    <>
      <Router>
        <Navbar logo="212" mode={change_mode} enable={change_modes} />
        <div className="container p-y5">
          <Routes> 
            <Route path="/about" element={<About />} /> 
            <Route path="/form" element={<TextForm />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
