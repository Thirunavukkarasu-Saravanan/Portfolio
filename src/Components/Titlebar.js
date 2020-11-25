import { render } from "@testing-library/react";
import React from "react";
import entries from "../Data/data-entry";
import banner from "../Images/banner.png";

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
      <nav class="nav justify-content-end">
        <a class="nav-link active" href="#">
          Active
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </nav>
    );
  }
}

export default Header;
