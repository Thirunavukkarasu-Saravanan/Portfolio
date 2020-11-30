import profile from "../Images/profile.JPG";
import React from "react";
import entries from "../Data/data-entry";
import banner from "../Images/banner.png";
import cntct from "../Images/cntct.png";
import cont from "../Images/cont.png";
import gm from "../Images/gm.png";
import ln from "../Images/ln.png";
import lnsb from "../Images/lnsb.png";
import lnc from "../Images/lnc.png";
import lnbc from "../Images/lnbc.png";
import git from "../Images/git.png";
import eml from "../Images/eml.png";
import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap";

function ProfileCard() {
  let gitUrl = entries.Tags[1].Social1;
  let inUrl = entries.Tags[1].Social2;
  let resumeUrl = entries.Tags[1].Social3;
  let profileName = entries.Tags[0].Title;
  let profileMail = entries.Tags[1].Social4;
  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Image
            fluid
            src={profile}
            alt="Profile Logo"
            style={{
              borderRadius: "100px",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          />
          <Nav defaultActiveKey="/home" className="justify-content-center">
            <Nav.Link href={gitUrl}>
              <Image src={git} width="45px" fluid />
            </Nav.Link>
            <Nav.Link href={inUrl}>
              <Image src={lnsb} width="28px" fluid />
            </Nav.Link>
            <Nav.Link href={profileMail}>
              <Image src={gm} width="36px" fluid />
            </Nav.Link>
          </Nav>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button
                  href={resumeUrl}
                  variant="outline-dark"
                  style={{ marginTop: "30px" }}
                >
                  Resume
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default ProfileCard;
