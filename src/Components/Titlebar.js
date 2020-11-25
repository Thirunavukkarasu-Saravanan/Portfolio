import { render } from "@testing-library/react";
import React from "react";
import entries from "../Data/data-entry";
import banner from "../Images/banner.png";
import MultipleCounter from "./Components/MultipleCounter";

class Header extends React.Component {
  render() {
    console.log(entries);
    console.log(entries.Tags[0].Title);
    let pageTitle = entries.Tags[0].Title;
    let nav1 = entries.Tags[0].NavBar1;
    let nav2 = entries.Tags[0].NavBar2;
    let nav3 = entries.Tags[0].NavBar3;
    let nav4 = entries.Tags[0].NavBar4;
    return (
      <nav class="nav justify-content-end ">
        <a class="nav-link text-dark " href="#">
          {nav1}
        </a>
        <a class="nav-link text-dark" href="#">
          {nav2}
        </a>
        <a class="nav-link text-dark" href="#">
          {nav4}
        </a>
      </nav>
    );
  }
}

export default Header;
