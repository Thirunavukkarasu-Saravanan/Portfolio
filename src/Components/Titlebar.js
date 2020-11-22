import { render } from "@testing-library/react";
import React from "react";
import entries from "../Data/data-entry";

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
      <div>
        <div className="HeaderTitle">
          <h2 src="">{pageTitle}</h2>
        </div>
        <div className="NavBar">
          <ul className="NavTabs">
            <li className="NavLinks">
              <a href="#home">{nav1}</a>
            </li>
            <li className="NavLinks">
              <a href="#news">{nav2}</a>
            </li>
            <li className="NavLinks">
              <a href="#news">{nav3}</a>
            </li>
            <li className="NavLinkspcl">
              <a className="active" href="#about">
                {nav4}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
