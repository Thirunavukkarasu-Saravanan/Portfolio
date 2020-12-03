import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import lnsb from "../Images/lnsb.png";
import lnc from "../Images/lnc.png";
import lnbc from "../Images/lnbc.png";
import git from "../Images/git.png";

function showProject() {
  return (
    <div>
      <h1>project</h1>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  height="100px"
                  src="holder.js/100px160"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>{" "}
            </CardDeck>
          </Col>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>{" "}
            </CardDeck>
          </Col>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  width="200px"
                  height="200px"
                  src={git}
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>{" "}
            </CardDeck>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}

export default showProject;
