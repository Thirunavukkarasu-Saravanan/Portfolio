import React from "react";
import { Card, Image } from "react-bootstrap";

function ProjectCardRight(props) {
  return (
    <Card bg="secondary" style={{ width: "21rem" }}>
      <Card.Img
        variant="top"
        height="160px"
        width="140px"
        src={props.projectimg}
      />
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
