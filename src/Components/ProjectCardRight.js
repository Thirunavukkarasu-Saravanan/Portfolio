import React from "react";
import { Card, Image, Carousel } from "react-bootstrap";

function ProjectCardRight(props) {
  return (
    <Card bg="secondary" style={{ width: "21rem" }}>
      {/* <Card.Img
        variant="top"
        height="160px"
        width="140px"
        src={props.projectimg}
      /> */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height="160px"
            width="160px"
            src={props.projectimg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height="160px"
            width="160px"
            src={props.projectimg}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="160px"
            width="160px"
            src={props.projectimg}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2">{props.subtitle1}</Card.Subtitle>
        <Card.Subtitle className="mb-2">{props.subtitle2}</Card.Subtitle>
        <Card.Link href={props.url1}>
          <Image src={props.linkimg1} width="40px" fluid />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardRight;
