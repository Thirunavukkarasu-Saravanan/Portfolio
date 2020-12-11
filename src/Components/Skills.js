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
import SkillChart from "./SkillChart";
import SkillStack from "./SkillStack";

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
      <SkillStack />
    </div>
  );
}

export default Skills;
