import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitch } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-copywright">
          <h3>Designed by Afonso Pereira</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} osnofaz</h3>
        </div>
        <div className="footer-body">
          <ul style={{ listStyleType: "none", padding: "0", display: "flex", justifyContent: "center", gap: "20px" }} className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/osnofaz"
                className="social-iconColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub style={{ height: "20px", width: "20px" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mafonso-pereira/"
                className="social-iconColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{ height: "20px", width: "20px" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitch.tv/osnofaz"
                className="social-iconColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitch style={{ height: "20px", width: "20px" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/osnofaz"
                className="social-iconColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram style={{ height: "20px", width: "20px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
