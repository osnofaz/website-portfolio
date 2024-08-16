import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Container style={{ justifyContent: "center", display:"grid"}}>
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
    </Container>
  );
}

export default Techstack;
