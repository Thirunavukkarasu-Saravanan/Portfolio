import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ProjectCardRight from "./ProjectCardRight";

function DisplayProject(props) {
  return (
    <div>
      <h1>project</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <ProjectCard
              projectimg={props.comp1Img}
              title={props.comp1Title}
              subtitle1={props.comp1subOne}
              url1={props.comp1url1}
              url2={props.comp1url2}
              linkimg1={props.comp1linkimg1}
              linkimg2={props.comp1linkimg2}
            />
          </Col>
          <Col xs lg="2"></Col>
          <Col xs lg="2">
            <ProjectCardRight
              projectimg={props.comp2Img}
              title={props.comp2Title}
              subtitle1={props.comp2subOne}
              subtitle2={props.comp2subTwo}
              url1={props.comp2url1}
              linkimg1={props.comp1linkimg1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DisplayProject;
