import React from "react";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import SkillChart from "./SkillChart";

function Skills() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Skills</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col sm={8}>
            <SkillChart />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col sm={8}>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Tech Stack - Web Application (Java/ PHP)
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      JSP/ Servlet, MySQL, JunitJunit/JaCoCo, PITclipse,
                      Selenium IDE/Web driver, Apache Tomcat, MVC architecture.
                      <p></p>
                      HTML, JavaScript, PHP, Codeigniter, Bootstrap Sass, XAMPP,
                      MariaDB.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  {" "}
                  Tech Stack - Mobile Application (Java Android)
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Android Studio, Java, MySQLite, Object-oriented software
                    engineering principles.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Software Development Methodologies
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Agile - Scrum, Waterfall</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Software Verification,Validation and Testing
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Blackbox testing, MCDC, Unit Testing, Integration and System
                    Testing
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Database and Tools
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    Relational Database (MySQL, Oracle), RESTful API, JSON,
                    Postman.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
