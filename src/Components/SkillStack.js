import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Tab,
  ListGroup,
  Jumbotron,
  Button,
  Badge,
} from "react-bootstrap";

function SkillStack() {
  return (
    <Container>
      <h2>
        {" "}
        Web Application <Badge variant="secondary">Java/PHP</Badge>{" "}
      </h2>
      <p>
        Java - JSP/ Servlet, MySQL, Apache Tomcat, MVC architecture ,
        Junit/JaCoCo, PITclipse, Selenium IDE/Web driver.
      </p>
      <p>
        PHP - HTML/CSS, JavaScript, PHP, Codeigniter, Bootstrap Sass, XAMPP,
        MariaDB.
      </p>
      <h2>
        Mobile Application <Badge variant="secondary">Java-Android</Badge>
      </h2>
      <p>
        Android Studio, Java, MySQLite, Object-oriented software engineering
        principles.
      </p>
      <h2>Software Development Methodologies </h2>
      <p>Agile - Scrum, Waterfall</p>
      <h2>Software Verification,Validation and Testing </h2>
      <p>
        Blackbox testing, MCDC, Unit Testing, Integration and System Testing
      </p>
      <h2>Database and API</h2>
      <p>Relational Database (MySQL, Oracle), RESTful API, JSON, Postman.</p>
      <Row>
        <Col sm={6}></Col>
        <Col sm={6}></Col>
      </Row>
      <hr></hr>
    </Container>
  );
}

export default SkillStack;
