import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titlebar from "./Components/Titlebar";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Titlebar />
        </div>
        <Counter />
        <div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
