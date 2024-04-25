import React from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Footer from '../Footer';
import AboutImg from '../assets/images/about-page-img.jpg';


const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  /* gap: 5rem; */
  margin-top: 4rem;
  .title {
    font-size: 2rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 20rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.3em;
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
  }
`;

const AboutPageStyles = styled.div`
  padding: 5rem 0 10rem 0;
  background-color: var(--dark-background);
  transition: 0.4s ease-in-out;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    span {
      background-color: var(--dark-text);
      padding: 0 0.5rem;
      border-radius: 8px;
      transition: 0.4s ease-in-out;
    }
  }
  .about__span{
    margin-left: 0.6rem;
    color: var(--dark-background);
    font-weight: bold;
    font-size: 3rem;
  }
  .about__heading {
    font-size: 2.6rem;
    margin-bottom: 3rem;
    line-height: 3rem;
    margin-top: 0.6rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 0px;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
      display: inline-flex;
      flex-direction: column;
      align-items: unset;
    }
    .about__heading {
      font-size: 2.5rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
    }
    .about__span{
      margin-left: 0;
      font-size: 50px;
    }
    .title {
      font-size: 1rem;
    }
    .items {
      left: 9rem;
      gap: 0.2rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .formation{
      font-size: 20px;
      margin-top: -5px;
    }
    .formationdesc{
      font-size: 10px;
      margin-bottom: -10px;
      margin-top: -10px;
    }
    .item{
      padding:0.3rem;
    }
    .formationdesc2{
      font-size: 5px;
      margin-bottom: -10px;
    }
    .itemdesc{
      font-size: 13px;
    }
   }
  .aboutmetext{
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.3em;
      @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
  }
  
  .span{
    color: var(--dark-text)
  }
 
`;

function About() {
  const {t} = useTranslation(['aboutme']);

    return (
      <>
        <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                {t("iam")}<div className="about__span"><span>Afonso Pereira</span></div>
              </p>
              <h2 className="about__heading">Web Developer / Freetime Streamer</h2>
              <div className="about__info">
                <div className="aboutmetext">
                {t("desc1")}<br/><br/>
                {t("desc2")}<br/><br/>
                {t("desc3")}      
                          
              </div>
              </div>
              <div className="about__button">
              <a className="botaodownload" type="submit" href="/files/AfonsoPereiraCV_EN.pdf" download="AfonsoPereiraCV_EN.pdf">Download CV - EN</a>
              <a className="botaodownload" type="submit" href="/files/AfonsoPereiraCV_PT.pdf" download="AfonsoPereiraCV_PT.pdf">Download CV - PT</a>
              </div>

            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items" >
            <div className="about__info__item" >
              <h1 className="about__info__heading">{t("education")}</h1>

    <AboutItemStyles>
      <h1 className="title">{t("degree")}</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item">
              <h2 className="formation">Multimedia</h2><p className="formationdesc">Instituto Superior Miguel Torga</p>
          </div>
      </div>
    </AboutItemStyles>
    <AboutItemStyles>
      <h1 className="title">{t("masters")}</h1><h6>*</h6>
      <div className="items" style={{ color: "white" }}>
              <div className="item">
              <h2 className="formation">Design & Multimedia</h2><p className="formationdesc"> Universidade de Coimbra </p>  <h6 className="formationdesc2">{t("conclude")}</h6>
          </div>
      </div>
    </AboutItemStyles>

    <AboutItemStyles>
      <h1 className="title">{t("certificate")}</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item">
              <h2 className="formation">Digital Marketing</h2><p className="formationdesc">Google, IAB Europe</p>
          </div>
      </div>
    </AboutItemStyles>

            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("skills")}</h1>

              <AboutItemStyles>
      <h1 className="title">FrontEnd</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item itemdesc">
              <h2>HTML</h2>
          </div>
          <div className="item itemdesc">
              <h2>CSS</h2>
          </div>
          <div className="item itemdesc">
              <h2>JavaScript</h2>
          </div>
          <div className="item itemdesc">
              <h2>React</h2>
          </div>
      </div>
    </AboutItemStyles>

    <AboutItemStyles>
      <h1 className="title">BackEnd</h1>
      <div className="items" style={{ color: "white" }}>
        <div className="item itemdesc"><h2>MySQL</h2></div>
        <div className="item itemdesc"><h2>PHP</h2></div>
      </div>
    </AboutItemStyles>

    <AboutItemStyles>
      <h1 className="title">Design</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item itemdesc">
              Photoshop
          </div>
          <div className="item itemdesc">
              AE
          </div>
          <div className="item itemdesc">
              Illustrator
          </div>
          <div className="item itemdesc">
              Premiere
          </div>
      </div>
    </AboutItemStyles>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("experiences")}</h1>

              <AboutItemStyles>
                <h1 className="title">2022-{t("present")}</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item itemdesc">{t("frontenddev")}</div>
                </div>
              </AboutItemStyles>
              <AboutItemStyles>
                <h1 className="title">2020-2021</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item itemdesc">{t("graphicdesigner")}</div>
                </div>
              </AboutItemStyles>
              <AboutItemStyles>
                <h1 className="title">2015-2020</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item itemdesc">{t("volunteer")}</div>
                </div>
              </AboutItemStyles>
    <AboutItemStyles>
      <h1 className="title">2015-2015</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item itemdesc">
              {t("internship")}
          </div>
      </div>
    </AboutItemStyles>
    <AboutItemStyles>
      <h1 className="title">2005-2008</h1>
      <div className="items" style={{ color: "white" }}>
              <div className="item itemdesc">
              {t("stageactor")}
          </div>
      </div>
    </AboutItemStyles>
            </div>
          </div>
        </div>
      </AboutPageStyles>
      <Footer />
    </>
    );
}

export default About;