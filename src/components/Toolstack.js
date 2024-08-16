import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  SiIntellijidea,
  SiMacos,
  SiMicrosoftteams,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";


function Toolstack() {
  const {t} = useTranslation(['aboutme']);

  return (
    <Container style={{ justifyContent: "center", display:"grid"}}>
    <h1 className="project-heading">
       {t("toolset")}
      </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
    </Row>
    </Container>
  );
}

export default Toolstack;
