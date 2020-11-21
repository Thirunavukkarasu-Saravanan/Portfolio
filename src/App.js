import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titlebar from "./Components/Titlebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Titlebar />
        </div>
      </header>
    </div>
  );
}

export default App;
