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
import AdminHome from "../Images/AdminHome.png";
import AddUser from "../Images/adduser.png";
import Lean1 from "../Images/leanHome.png";
import Lean2 from "../Images/lean2.png";
import Lean3 from "../Images/lean3.png";
import Lean4 from "../Images/lean4.png";
import link from "../Images/links.png";
import bd1 from "../Images/hist1.png";
import bd2 from "../Images/grphs.png";
import bd3 from "../Images/grphss.png";

function showProject() {
  let imageFlag = true;
  let gitUrl1 =
    "https://github.com/Thirunavukkarasu-Saravanan/UTA-Resident-App";
  let gitUrl2 =
    "https://github.com/Thirunavukkarasu-Saravanan/UTA_Facility_Management";
  let youTube11 = "https://www.youtube.com/watch?v=GGk7fnsfMH0";
  let gitUrl3 =
    "https://github.com/Thirunavukkarasu-Saravanan/Web-Application-using-Codeigniter-for-Event-Management";
  let url1 =
    "http://saravananthirunavukkarasu.uta.cloud/phase5/tesst/lean/home";
  let gitUrl4 = "https://github.com/Thirunavukkarasu-Saravanan/Big-Data";
  return (
    <div>
      <DisplayProject
        comp1Img1={AppHome}
        comp1Img2={AdminHome}
        comp1Img3={AddUser}
        comp1Title="Resident App - Android application for on-campus residents"
        comp1subOne="Stack: Android Studio, Java, MySQLite, Object-oriented Software
          engineering principles."
        comp1url1={gitUrl1}
        comp1url2={youTube11}
        comp1linkimg1={git}
        comp1linkimg2={youtube}
        comp2Img1={bd1}
        comp2Img2={bd2}
        comp2Img3={bd3}
        comp2Title="Facilities Management - Web application"
        comp2subOne="Development - JSP/Servlets, MySQL,Java,Apache Tomcat, MVC architecture."
        comp2subTwo="Testing - Junit/JaCoCo, PITclipse, Selenium IDE/Web driver"
        comp2url1={gitUrl2}
      />
      <DisplayProject
        comp1Img1={Lean1}
        comp1Img2={Lean2}
        comp1Img3={Lean3}
        comp1Img4={Lean4}
        addImage={imageFlag}
        comp1Title="Event Management - Web application"
        comp1subOne="Stack: HTML,CSS, JavaScript, PHP, MySQL, Codeigniter, XAMPP."
        comp1url1={gitUrl3}
        comp1url2={url1}
        comp1linkimg1={git}
        comp1linkimg2={link}
        comp2Img1={bd1}
        comp2Img2={bd2}
        comp2Img3={bd3}
        comp2Title="Big Data - Map Reduce and Graph Processing"
        comp2subOne="Set of projects implemeting map-reduction and Graph processing."
        comp2subTwo=" Technologies/ Platform: Hadoop, Spark, Hive, Pig, GraphX and SDSC Comet Cluster. "
        comp2url1={gitUrl4}
      />
    </div>
  );
}

export default showProject;
