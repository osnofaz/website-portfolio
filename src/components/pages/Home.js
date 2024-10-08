import PropTypes from "prop-types";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';
import '../Button.css';
import FindMeSection from '../FindMeSection';
import Footer from '../Footer';
import Modal from '../Modal';
import Particle from '../Particle';
import ServicesSection from '../ServicesSection';



function Home() {
     const [estadoModal4, cambiarEstadoModal4] = useState(false);
     const {t} = useTranslation(['home']);

  return (
    <>
    <Particle />
    
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' playsInline autoPlay loop muted />
      <h1 style={{ zIndex: "1"}}>AFONSO "OSNOFAZ" PEREIRA</h1>
        <div className="i-title">
        <p>{t("iama")}</p>
          <div className="i-title-wrapper">
            <div className="i-title-item">WEB DEVELOPER</div>
            <div className="i-title-item">{t("uiuxdesigner")}</div>
            <div className="i-title-item">{t("graphicdesigner")}</div>
            <div className="i-title-item">STREAMER</div>
            <div className="i-title-item">GAMER</div>
          </div>
        </div>
      <div className='hero-btns'>
        <Link to="./about">
      <button className="btn btn--outline btn--large" > {t("aboutme")} </button>
      </Link>
      <button className="btn btn--primary btn--large" onClick={() => cambiarEstadoModal4(!estadoModal4)}> {t("showreel")} <i className="far fa-play-circle"></i></button>
      </div>
    </div>
      <Modal
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo="Showreel"
				mostrarHeader={false}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'0px'}
			>
				<Contenido>
        <YoutubeEmbed embedId="VnnJXAvE6OU" />
				</Contenido>
			</Modal>
      <ServicesSection />
      <FindMeSection />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;



const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
		color:#000000;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
		color:#000000;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
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