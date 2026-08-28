import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Modal from './Modal';
import './Modal.css';
import ProjectImg from './assets/images/projectImg.webp';



export default function ProjectItem(
  {
  img = ProjectImg,
  img2 = ProjectImg,
  imgVideo = false,
  img2Video = false,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  desc2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  url = '',
  tool1 ='',
}) {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const {t} = useTranslation(['projects']);

   
    
  return (
    <ProjectItemStyles>
                <Modal
					estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo={t(title)}
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
			>
				<Contenido >
        <div className="projectItem__img">
          {img2Video ? (
            <video src={img2} autoPlay loop muted playsInline />
          ) : url !== "#!" ? (
            <a href={url} target="_blank" rel="noreferrer">
              <img border="0" src={img2} alt={t(title)} loading="lazy"/>
            </a>
          ) : (
            <img border="0" src={img2} alt={t(title)} loading="lazy" />
          )}      
        </div>
					<p>{t(desc)}</p>
          <p>{t(desc2)}</p>
          <br/>
          <h1 className="tooltitle">Tools</h1>
          <div className="svgtool">{tool1}</div>
				</Contenido>
			</Modal>
      <div className="projectItem__img">
        {imgVideo ? (
          <video src={img} autoPlay loop muted playsInline />
        ) : (
          <img src={img} alt={t(title)} loading="lazy" />
        )}
      </div>
      <div className="projectItem__info">          
          <h3 className="projectItem__title">{t(title)}</h3>
          <p className="modal__description">{t(desc)}</p>
          <button className="btn btn--primary btn--large" onClick={() => cambiarEstadoModal1(!estadoModal1)}>{t("moreinfo")} </button>
      </div> 

    
        
        
    </ProjectItemStyles>
  );
}
const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  
	h1 {
		font-size: var(--fs-xl);
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: var(--fs-base);
    width: 100%;
	}
	img, video {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
  @media only screen and (max-width: 768px) {
  p {
		font-size: var(--fs-sm);
    width: 100%;
	}
  h1 {
		font-size: var(--fs-lg);
		font-weight: 700;
		margin-bottom: 10px;
	}
}
`;


const ProjectItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .projectItem__img {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid var(--border-subtle);
    margin-bottom: 20px;
    img, video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    flex: 1;
    margin-top: 1rem;
    background-color: var(--dark-footer);
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-subtle);
    
    .btn {
      margin-top: auto;
    }
  }
  .projectItem__title {
    font-size: var(--fs-lg);
  }
  .projectItem__desc {
    font-size: var(--fs-base);
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img{
      height: 200px;
    }
  }

  @media only screen and (max-width: 1050px) {
    .projectItem__img{
      height: 300px;
    }
  }
`;
