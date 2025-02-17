import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Separate CSS file for styles

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      document.body.className = newMode;
      showAlert(
        `Dark mode has been ${newMode === "dark" ? "enabled" : "disabled"}`,
        "success"
      );
      return newMode;
    });
  };




  return (
    <div>
      <Header mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <Hero mode={mode} />
    </div>
  );
}

export default App;
