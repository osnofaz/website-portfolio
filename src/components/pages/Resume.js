import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import pdf from "../assets/files/AfonsoPereiraCV.pdf";
import Footer from '../Footer';
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
     <Particle />
     <div style={{ marginBottom: "160px" }}>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <div>
          <a className="botaodownload" type="submit" href={pdf} download="AfonsoPereiraCV.pdf"><AiOutlineDownload style={{ height: "40px", width: "40px" }} /> DOWNLOAD CV</a>
        </div>
        </Row>

        <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.7} />
        </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <div>
          <a className="botaodownload" type="submit" href={pdf} download="AfonsoPereiraCV.pdf"><AiOutlineDownload style={{ height: "40px", width: "40px" }} /> DOWNLOAD CV</a>
        </div>
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  );
}

export default ResumeNew;