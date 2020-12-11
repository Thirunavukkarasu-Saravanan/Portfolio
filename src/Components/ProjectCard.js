import React from "react";
import { Card, Image, Carousel } from "react-bootstrap";
import ra1 from "../Images/AdminHome.png";

function ProjectCard(props) {
  const renderExtraImage = () => {
    console.log("saracheck" + props.projectimgflag);
    if (props.projectimgflag) {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="200px"
            width="200px"
            src={props.projectimg4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      );
    }
  };
  return (
    <Card bg="secondary" style={{ height: "27.8rem", width: "21rem" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height="200px"
            width="200px"
            src={props.projectimg1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height="200px"
            width="200px"
            src={props.projectimg2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="200px"
            width="200px"
            src={props.projectimg3}
            alt="Third slide"
          />
        </Carousel.Item>
        {renderExtraImage()}
      </Carousel>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2">{props.subtitle1}</Card.Subtitle>
        <Card.Link href={props.url1}>
          <Image src={props.linkimg1} width="40px" fluid />
        </Card.Link>
        <Card.Link href={props.url2}>
          <Image src={props.linkimg2} width="35px" fluid />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
