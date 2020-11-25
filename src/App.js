import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titlebar from "./Components/Titlebar";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
import MultipleCounter from "./Components/MultipleCounter";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Titlebar />
        </div>
        {/* <Counter /> */}
        <MultipleCounter />
        <Profile />
        <div>{/* <Footer /> */}</div>
      </header>
    </div>
  );
}

export default App;
