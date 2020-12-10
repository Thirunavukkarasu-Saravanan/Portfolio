import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
  Button,
  Image,
  Nav,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import git from "../Images/git.png";
import youtube from "../Images/youtube.png";
import appimg from "../Images/android.png";
import AppHome from "../Images/AppHome.png";
import jsp from "../Images/jsp.png";
import DisplayProject from "./DisplayProject";

import php from "../Images/php.png";

function showProject() {
  let gitUrl1 =
    "https://github.com/Thirunavukkarasu-Saravanan/UTA-Resident-App";
  let youTube11 = "https://www.youtube.com/watch?v=GGk7fnsfMH0";
  let gitUrl2 =
    "https://github.com/Thirunavukkarasu-Saravanan/UTA_Facility_Management";
  return (
    <div>
      <DisplayProject
        comp1Img={AppHome}
        comp1Title="Resident App - Android application for on-campus residents"
        comp1subOne="Stack: Android Studio, Java, MySQLite, Object-oriented Software
          engineering principles."
        comp1url1={gitUrl1}
        comp1url2={youTube11}
        comp1linkimg1={git}
        comp1linkimg2={youtube}
        comp2Img={jsp}
        comp2Title="Facilities Management - Web application"
        comp2subOne="Development - JSP/Servlets, MySQL,Java,Apache Tomcat, MVC architecture."
        comp2subTwo="Testing - Junit/JaCoCo, PITclipse, Selenium IDE/Web driver"
        comp2url1={gitUrl2}
      />
      <DisplayProject
        comp1Img={php}
        comp1Title="Resident App - Android application for on-campus residents"
        comp1subOne="Stack: Android Studio, Java, MySQLite, Object-oriented Software
          engineering principles."
        comp1url1={gitUrl1}
        comp1url2={youTube11}
        comp1linkimg1={git}
        comp1linkimg2={youtube}
        comp2Img={jsp}
        comp2Title="Facilities Management - Web application"
        comp2subOne="Development - JSP/Servlets, MySQL,Java,Apache Tomcat, MVC architecture."
        comp2subTwo="Testing - Junit/JaCoCo, PITclipse, Selenium IDE/Web driver"
        comp2url1={gitUrl2}
      />
    </div>
  );
}

export default showProject;
