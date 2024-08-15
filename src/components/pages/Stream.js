import React from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import '../../App.css';
import Footer from '../Footer';
import Particle from '../Particle';
import SectionTitle from '../SectionTitle';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  z-index: 1;
  position: relative;
  transition: 0.4s ease-in-out;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  
`;


export default function Stream() {
  const {t} = useTranslation(['stream']);

    return (
        <>
        <Particle />
          <ProjectStyle>
          <div className="container" style={{ marginBottom: "55px" }}>
            <SectionTitle
              heading="STREAM"
              subheading={t("streamdesc")}
            />
            <div className='streamcontainer'>
              <div className='streamvideo'>
                <iframe className="streammobile" title="streamplayer" src="https://player.twitch.tv/?channel=osnofaz&parent=afonsopereira.com" frameborder="0" allowFullScreen="true" scrolling="yes" height="500" width="900"></iframe>
              </div>
            <div className='streamchat'>
              <iframe
              title="streamchatwindow"
              id="chat_embed"
              src="https://www.twitch.tv/embed/osnofaz/chat?parent=afonsopereira.com"
              height="500"
              width="350">
              </iframe>
            </div>
            </div>
          </div>
          </ProjectStyle>
          <Footer />
        </>
      );
    }
