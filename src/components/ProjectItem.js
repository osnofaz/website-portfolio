import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Modal from './Modal';
import './Modal.css';
import ProjectImg from './assets/images/projectImg.png';



export default function ProjectItem(
  {
  img = ProjectImg,
  img2 = ProjectImg,
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
        <a onClick="window.open(this.href,this.target);return false;" href={url} target="/"><img border="0" src={img2} alt="" /></a>
      </div>
					<p>{t(desc)}</p>
          <p>{t(desc2)}</p>
          <br/>
          <h1 className="tooltitle">Tools</h1>
          <div className="svgtool">{tool1}</div>
				</Contenido>
			</Modal>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
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
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
    width: 100%;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
  @media only screen and (max-width: 768px) {
  p {
		font-size:  8px;
    width: 100%;
	}
  h1 {
		font-size: 15px;
		font-weight: 700;
		margin-bottom: 10px;
	}
}
`;


const ProjectItemStyles = styled.div`
  .projectItem__img {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    margin-bottom: 20px;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--dark-footer);
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.2rem;
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
`;