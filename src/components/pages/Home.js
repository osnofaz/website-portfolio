import PropTypes from "prop-types";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router';
import styled from 'styled-components';
import '../../App.css';
import '../Button.css';
import FindMeSection from '../FindMeSection';
import Footer from '../Footer';
import Modal from '../Modal';
import ServicesSection from '../ServicesSection';



function Home() {
     const [isShowreelOpen, setIsShowreelOpen] = useState(false);
     const {t} = useTranslation(['home']);

  return (
    <>
    <div className='hero-container'>
      <video className="hero-video" src='/videos/video-1.mp4' playsInline autoPlay loop muted />
      <div className="hero-content">
        <p className="hero-eyebrow">{t("heroeyebrow")}</p>
        <h1>Afonso Pereira</h1>
        <p className="hero-role">{t("herorole")}</p>
        <p className="hero-tagline">{t("herotagline")}</p>
      </div>
      <div className='hero-btns'>
        <Link to="./about">
      <button className="btn btn--outline btn--large" > {t("aboutme")} </button>
      </Link>
      <button className="btn btn--primary btn--large" onClick={() => setIsShowreelOpen(!isShowreelOpen)}> {t("showreel")} <i className="far fa-play-circle"></i></button>
      </div>
      <div className="scroll-cue">
        <span></span>
      </div>
    </div>
      <Modal
				isOpen={isShowreelOpen}
				onClose={setIsShowreelOpen}
				title="Showreel"
				showHeader={false}
				showOverlay={true}
				alignment={'center'}
				padding={'0px'}
			>
				<ShowreelModalBody>
        <YoutubeEmbed embedId="VnnJXAvE6OU" />
				</ShowreelModalBody>
			</Modal>
      <ServicesSection />
      <FindMeSection />
      <Footer />
    </>
  );
}

export default Home;



const ShowreelModalBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}/?&autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
