import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Titlebar from "./Components/Titlebar";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
import MultipleCounter from "./Components/MultipleCounter";
import Profile from "./Components/Profile";
import Experience from "./Components/Experience";
import Project from "./Components/Project";

function App() {
  return (
    <Router>
      <div className="App"></div>

      <header className="App-header">
        <Titlebar />
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/exp">
          <Experience />
          <Experience />
          <Experience />
        </Route>
        <Route path="/proj">
          <Project />
        </Route>
      </header>
    </Router>
  );
}

export default App;
