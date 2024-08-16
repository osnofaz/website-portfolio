import React from 'react';
import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn, FaTwitch } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import styled from 'styled-components';
import FindMeTitle from './FindMeTitle';


const FindMeStyles = styled.div`
  .connectme__allItems {
    display: flex;
    gap: 8rem;
    justify-content: center;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .connectme__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function FindMeSection() {
  const {t} = useTranslation(['home']);
  return (
    <FindMeStyles>
      <div className='cards'>
      <div className="container">
        <FindMeTitle subheading={t("contactme")} heading="" />
        <div className="connectme__allItems">
        <ul className="home-about-social-links">
        <Tilt>
              <li className="social-icons">
                <a
                  href="https://github.com/osnofaz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{ height: "70%", width: "100%" }} />
                </a>
              </li>
        </Tilt>
        <Tilt>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mafonso-pereira/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ height: "70%", width: "100%" }} />
                </a>
              </li>
        </Tilt>
        <Tilt>
              <li className="social-icons">
                <a
                  href="https://twitch.tv/osnofaz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitch style={{ height: "70%", width: "100%" }} />
                </a>
              </li>
        </Tilt>
        <Tilt>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/osnofaz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram style={{ height: "70%", width: "100%" }} />
                </a>
              </li>
        </Tilt>
            </ul>
        </div>
      </div>
      </div>
    </FindMeStyles>
  );
}
