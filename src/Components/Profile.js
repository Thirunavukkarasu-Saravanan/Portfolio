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

import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Nav,
  Alert,
  Badge,
  ProgressBar,
  ListGroup,
  Tab,
  Sonnet,
} from "react-bootstrap";

function ProfileCard() {
  let gitUrl = entries.Tags[1].Social1;
  let inUrl = entries.Tags[1].Social2;
  let resumeUrl = entries.Tags[1].Social3;
  let profileName = entries.Tags[2].ProfileName;
  let ProfileDescription1 = entries.Tags[2].ProfileDescription1;
  let ProfileDescription2 = entries.Tags[2].ProfileDescription2;
  let ProfileHeader = entries.Tags[2].ProfileHeader;
  let ProfileInfo = entries.Tags[2].ProfileInfo;
  let profileMail = entries.Tags[1].Social4;
  const now = 60;
  const noww = 40;

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
          <Col>
            <h2>
              <Badge>{profileName}</Badge>
            </h2>
          </Col>
          <Col>I am a Software Developer</Col>
          <Nav defaultActiveKey="/home" className="justify-content-center">
            <Nav.Link href={gitUrl}>
              <Image src={git} width="34px" fluid />
            </Nav.Link>
            <Nav.Link href={inUrl}>
              <Image src={lnsb} width="24PXx" fluid />
            </Nav.Link>
            <Nav.Link href={profileMail}>
              <Image src={gm} width="30px" fluid />
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
        <Alert>
          <h2>About me</h2>

          <p>{ProfileDescription1}</p>
          <hr />
          <p className="mb-0">{ProfileDescription2}</p>
        </Alert>
      </Row>
    </Container>
  );
}

export default ProfileCard;
