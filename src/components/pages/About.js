import React from 'react';
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import styled from 'styled-components';
import pdf from "../assets/files/AfonsoPereiraCV.pdf";
import AboutImg from '../assets/images/about-page-img.jpg';
import Footer from '../Footer';
import Particle from '../Particle';


const AboutItemStyles = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 3rem;
  
  .items {
    display: flex;
    gap: 1rem;
    position: absolute;
    left: 20rem;
    flex-wrap: wrap;
  }
  .ruby__text{    
    display: flex;
    align-items: center;
  }

  .margin__skill{    
    margin-bottom: 0;
  }

  .top__reset {
    top: 0;
  }


  @media only screen and (max-width: 768px) {
    display: block;
    gap: 1rem;
    margin-bottom: 2.5rem;
    .items {
      position: unset;
      gap: 1rem;
      left: unset;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .ruby__text{    
      display: ruby-text;
    }
    .title {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 960px) {
    .items {
      left: 17rem;
      gap: 0.5rem;
    }

    .margin__skill {
      margin-bottom: 4rem;
    }

    .top__reset {
      top: 0;
    }

  }

  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.3em;
    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
  }
`;

const AboutPageStyles = styled.div`
  padding: 5rem 0 10rem 0;
  transition: 0.4s ease-in-out;
  z-index: 1;
  position: relative;
  margin-top: 50px;

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
    margin-top: 8rem;
  }
  .about__info__item {
    margin-bottom: 9rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  .formationdesc2{
    margin-bottom: -10px;
  }

  .formation{
    margin-bottom: 5px;
  }

  .spacing {
    margin-bottom: 14rem;
  }

  @media only screen and (max-width: 960px) {
    .about__subheading {
      display: unset;
    }
    .about__span {
      margin-left: unset;
    }

    .margin__formation {
      margin-bottom: 21rem;
    }
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
      font-size: 2.3rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }
    .about__span{
      margin-left: 0;
      font-size: 45px;
    }
    .items {
      gap: 0.5rem;
    }
    .formation{
      font-size: 27px;
      text-align: center;
    }
    .formationdesc{
      font-size: 15px;
    }
    .item{
      padding: 1rem;
    }
    .formationdesc2{
      font-size: 10px;
    }
    .itemdesc{
      font-size: 13px;
    }
    .spacing {
      margin-bottom: unset;
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
        <Particle />
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
              <a className="botaodownload" type="submit" href={pdf} download="AfonsoPereiraCV.pdf"><AiOutlineDownload style={{ height: "40px", width: "40px" }} /> Download CV</a>              </div>
            </div>

            <div className="right">
              <img src={AboutImg} alt="me"/>
            </div>
          </div>

          <div className="about__info__items" >
            <div className="about__info__item" >
              <h1 className="about__info__heading">{t("education")}</h1>

              <AboutItemStyles>
                <h1 className="title">{t("degree")}</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">Multimedia</h2>
                    <p className="formationdesc">Instituto Superior Miguel Torga</p>
                  </div>
                </div>
              </AboutItemStyles>

              <AboutItemStyles>
                <div className="ruby__text">
                <h1 className="title">{t("masters")}</h1>
                <h6>*</h6>
                </div>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">Design & Multimedia</h2>
                    <p className="formationdesc"> Universidade de Coimbra </p>
                    <h6 className="formationdesc2">{t("conclude")}</h6>
                  </div>
                </div>
              </AboutItemStyles>
              
              <div className="spacing margin__formation">
              <AboutItemStyles>
                <h1 className="title">{t("certificate")}</h1>
                  <div className="items" style={{ color: "white" }}>
                    <div className="item">
                      <h2 className="formation">Digital Marketing</h2>
                      <p className="formationdesc">Google, IAB Europe</p>
                    </div>
                    <div className="item">
                      <h2 className="formation">Foundations of Project Management</h2>
                      <p className="formationdesc">Coursera</p>
                    </div>
                    <div className="item">
                      <h2 className="formation">Introduction to Scrum Master Training</h2>
                      <p className="formationdesc">Coursera</p>
                    </div>
                  </div>
              </AboutItemStyles>
              </div>
            </div>
        
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("skills")}</h1>
                
                <AboutItemStyles>
                  <div className="margin__skill">
                  <h1 className="title">FrontEnd</h1>
                  <div className="items top__reset" style={{ color: "white" }}>
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
                    <div className="item itemdesc">
                      <h2>Vue</h2>
                    </div>
                  </div>
                  </div>
                </AboutItemStyles>

                <AboutItemStyles>
                  <h1 className="title">BackEnd</h1>
                  <div className="items" style={{ color: "white" }}>
                    <div className="item itemdesc">
                      <h2>MySQL</h2>
                    </div>
                    <div className="item itemdesc">
                      <h2>PHP</h2>
                    </div>
                  </div>
                </AboutItemStyles>

                <AboutItemStyles>
                  <h1 className="title">Design</h1>
                  <div className="items" style={{ color: "white" }}>
                    <div className="item itemdesc">
                      <h2>Photoshop</h2>
                    </div>
                    <div className="item itemdesc">
                      <h2>AE</h2>
                    </div>
                    <div className="item itemdesc">
                      <h2>Illustrator</h2>
                    </div>
                    <div className="item itemdesc">
                      <h2>Premiere</h2>
                    </div>
                  </div>
                </AboutItemStyles>
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">{t("experiences")}</h1>

                <AboutItemStyles>
                <h1 className="title">2022-{t("present")}</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">{t("frontenddev")}</h2>
                    <p className="formationdesc">Vodafone Portugal</p>
                  </div>
                </div>
                </AboutItemStyles>

                <AboutItemStyles>
                <h1 className="title">2020-2021</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">{t("graphicdesigner")}</h2>
                    <p className="formationdesc">Hypercode Lda.</p>
                  </div>
                </div>
                </AboutItemStyles>

                <AboutItemStyles>
                <h1 className="title">2015-2021</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">{t("volunteer")}</h2>
                    <p className="formationdesc">Rotaract Club de Abrantes</p>
                  </div>
                </div>
                </AboutItemStyles>

                <AboutItemStyles>
                <h1 className="title">2015-2015</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">{t("internship")}</h2>
                    <p className="formationdesc">{t("internship2")}</p>
                  </div>
                </div>
                </AboutItemStyles>

                <AboutItemStyles>
                <h1 className="title">2005-2008</h1>
                <div className="items" style={{ color: "white" }}>
                  <div className="item">
                    <h2 className="formation">{t("stageactor")}</h2>
                    <p className="formationdesc">Grupo de Teatro Palha de Abrantes</p>
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