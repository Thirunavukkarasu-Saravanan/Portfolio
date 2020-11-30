import React from "react";
import cont from "../Images/cont.png";
import { Accordion, Card, Container, Row, Col, Button } from "react-bootstrap";

import entries from "../Data/data-entry";

function Experience() {
  let role1 = entries.Tags[2].Experience[0].Role;
  let skills1 = entries.Tags[2].Experience[0].Description;
  let reference1 = entries.Tags[2].Experience[0].ReferenceName;
  let referencEmail1 = entries.Tags[2].Experience[0].ReferenceEmail;
  let referencContact1 = entries.Tags[2].Experience[0].ReferencePhone;
  let duration1 = entries.Tags[2].Experience[0].Duration;
  let companyName1 = entries.Tags[2].Experience[0].Company;
  return (
    <Container fluid>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <Card className="text-center">
            <Card.Header as="h5">{role1}</Card.Header>
            <Card.Body>
              <Card.Text>{companyName1}</Card.Text>
              <Col sm={13}>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Duties
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
            </Card.Body>
            <Card.Footer className="text-muted">{duration1}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
