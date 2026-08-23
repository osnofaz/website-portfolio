import React from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import AboutImg from '../assets/images/afonsopereiraheadshot2026.png';
import Footer from '../Footer';
import Techstack from '../Techstack';
import Toolstack from '../Toolstack';


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
    font-size: var(--fs-lg);
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
    font-size: var(--fs-xl);
  }
  .about__heading {
    font-size: var(--fs-lg);
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
      border: 1px solid var(--border-subtle);
    }
  }
  .about__info__items {
    margin-top: 8rem;
  }
  
  .about__info__heading {
    font-size: var(--fs-xl);
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
    font-size: var(--fs-base);
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
                {t("iam")}<span className="about__span">Afonso Pereira</span>
              </p>
              <h2 className="about__heading">{t("subheading")}</h2>
              <div className="about__info">
                <div className="aboutmetext">
                {t("desc1")}<br/><br/>
                {t("desc2")}<br/><br/>
                {t("desc3")}<br/><br/>
                {t("desc4")}  {t('lang') === 'en' ? (
            <>
            </>
        ) : ("")}                        
                </div>
              </div>
            </div>

            <div className="right">
              <img src={AboutImg} alt="Afonso Pereira" loading="lazy"/>
            </div>
          </div>

          <div className="about__info__items" >
            <div className="about__info__item" >
              <h1 className="about__info__heading">{t("skillset")}</h1>
              <Techstack />
              <Toolstack />
            </div>
        </div>
        </div>
    </AboutPageStyles>
      <Footer />
    </>
    );
}

export default About;