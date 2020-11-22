import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titlebar from "./Components/Titlebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Titlebar />
        </div>
        <div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
