import { render } from "@testing-library/react";
import React from "react";

function Header() {
  return (
    <div>
      <div className="HeaderTitle">
        <h2>SARAVANAN THIRUNAVUKKARASU</h2>
      </div>
      <div className="NavBar">
        <ul className="NavTabs">
          <li className="NavLinks">
            <a href="#home">Experience</a>
          </li>
          <li className="NavLinks">
            <a href="#news">Projects</a>
          </li>
          <li className="NavLinks">
            <a href="#news">Contact</a>
          </li>
          <li className="NavLinkspcl">
            <a className="active" href="#about">
              CreativeSpace
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
