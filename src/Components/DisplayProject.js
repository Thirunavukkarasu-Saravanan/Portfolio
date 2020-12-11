import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ProjectCardRight from "./ProjectCardRight";

function DisplayProject(props) {
  console.log("saracheck in display project component", props.addImage);
  return (
    <div>
      <h1>project</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <ProjectCard
              projectimg1={props.comp1Img1}
              projectimg2={props.comp1Img2}
              projectimg3={props.comp1Img3}
              projectimg4={props.comp1Img4}
              projectimgflag={props.addImage}
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
              projectimg1={props.comp2Img1}
              projectimg2={props.comp2Img2}
              projectimg3={props.comp2Img3}
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
