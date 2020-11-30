import React from "react";
import cont from "../Images/cont.png";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import entries from "../Data/data-entry";

function Experience() {
  let role1 = entries.Tags[2].Experience[0].Role;
  let skills1 = entries.Tags[2].Experience[0].Description;
  let reference1 = entries.Tags[2].Experience[0].ReferenceName;
  let referencEmail1 = entries.Tags[2].Experience[0].ReferenceEmail;
  let referencContact1 = entries.Tags[2].Experience[0].ReferencePhone;
  return (
    <Container fluid>
      <Row>
        <Col sm={8}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {role1}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{skills1}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Reference
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{reference1}</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{referencEmail1}</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{referencContact1}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
