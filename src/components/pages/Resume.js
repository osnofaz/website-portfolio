import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from "../assets/files/AfonsoPereiraCV.pdf";
import Footer from '../Footer';
import Particle from "../Particle";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
     <Particle />
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <div>
          <a className="botaodownload" type="submit" href={pdf} download="AfonsoPereiraCV_EN.pdf"><AiOutlineDownload style={{ height: "40px", width: "40px" }} /> Download CV</a>
        </div>
        </Row>

        <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.7}  />
        </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <div>
          <a className="botaodownload" type="submit" href={pdf} download="AfonsoPereiraCV_EN.pdf"><AiOutlineDownload style={{ height: "40px", width: "40px" }} /> Download CV</a>
        </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ResumeNew;
