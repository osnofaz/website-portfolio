import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from '../ContactForm';
import ContactInfoItem from '../ContactInfoItem';
import ContactSuccess from '../ContactSuccess';
import Footer from '../Footer';
import Particle from '../Particle';
import SectionTitle from '../SectionTitle';



const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  z-index: 1;
  position: relative;
  transition: 0.4s ease-in-out;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 25px;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    transition: 0.4s ease-in-out;
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    align-self:center;
    /* padding-left: 3rem; */
  }

 
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {t} = useTranslation(['contact']);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Particle />
    <ContactSectionStyle>
          <div className="container">
              <SectionTitle heading={t("contacttitle")} subheading={t("geintouch")}/>
              <div className="contactSection__wrapper">
                  <div className="left">
                      <ContactInfoItem icon={<MdEmail />} text="info@afonsopereira.com" />
                      <ContactInfoItem icon={<FaDiscord />} text="Osnofaz#6047" />
                      <ContactInfoItem text="Abrantes, Portugal" />
                  </div>
                  <div className="right">
                      {!isSubmitted ? (
          <ContactForm submitForm={submitForm} />
        ) : (
          <ContactSuccess />
        )}
                  </div>
              </div>
          </div>
      </ContactSectionStyle><Footer /></>
  );

}
