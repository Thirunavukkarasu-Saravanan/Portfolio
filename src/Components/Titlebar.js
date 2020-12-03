import { render } from "@testing-library/react";
import React from "react";
import entries from "../Data/data-entry";
import banner from "../Images/banner.png";
import { Link, Navbar } from "react-router-dom";

class Header extends React.Component {
  render() {
    console.log(entries);
    console.log(entries.Tags[0].Title);
    let pageTitle = entries.Tags[0].Title;
    let nav1 = entries.Tags[0].NavBar1;
    let nav2 = entries.Tags[0].NavBar2;
    let nav3 = entries.Tags[0].NavBar3;
    let nav4 = entries.Tags[0].NavBar4;
    let nav5 = entries.Tags[0].NavBar5;
    return (
      <nav className="nav justify-content-end ">
        <Link className="nav-link text-dark left" to="/">
          {nav5}
        </Link>
        <Link className="nav-link text-dark " to="/exp">
          {nav1}
        </Link>
        <Link className="nav-link text-dark" to="/proj">
          {nav2}
        </Link>
        <Link className="nav-link text-dark" to="/create">
          {nav4}
        </Link>
      </nav>
    );
  }
}

export default Header;
