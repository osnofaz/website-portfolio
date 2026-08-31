import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import Modal from './Modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {t} = useTranslation(['projects']);

   
    
  return (
    <ProjectItemStyles>
                <Modal
					isOpen={isModalOpen}
          onClose={setIsModalOpen}
          title={t(title)}
          showHeader={true}
          showOverlay={true}
          alignment={'center'}
          padding={'20px'}
			>
				<ModalBody >
        <div className="modal__media">
          {(() => {
            const media = img2Video ? (
              <video src={img2} autoPlay loop muted playsInline />
            ) : (
              <img border="0" src={img2} alt={t(title)} loading="lazy" />
            );
            return url !== "#!" ? (
              <a href={url} target="_blank" rel="noreferrer">
                {media}
                <span className="modal__media-badge"><FaPlay /> {t("watchfullvideo")}</span>
              </a>
            ) : media;
          })()}
        </div>
        <div className="modal__content">
				  <p>{t(desc)}</p>
          <p>{t(desc2)}</p>
          <h1 className="tooltitle">Tools</h1>
          <div className="svgtool">{tool1}</div>
        </div>
				</ModalBody>
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
          <p className="projectItem__desc">{t(desc)}</p>
          <button className="btn btn--primary btn--large" onClick={() => setIsModalOpen(!isModalOpen)}>{t("moreinfo")} </button>
      </div> 

    
        
        
    </ProjectItemStyles>
  );
}
const ModalBody = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;

	.modal__media {
		flex: 1.1;
		min-width: 0;
		aspect-ratio: 4 / 5;
		border-radius: 8px;
		overflow: hidden;
		background-color: var(--dark-footer);
		position: relative;
	}
	.modal__media img,
	.modal__media video,
	.modal__media a {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.modal__media a {
		position: relative;
	}
	.modal__media-badge {
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 6px;
		background: rgba(0, 0, 0, 0.65);
		color: #fff;
		font-size: var(--fs-xs);
		font-weight: 600;
		padding: 6px 12px;
		border-radius: 20px;
		backdrop-filter: blur(4px);
		transition: 0.3s ease-in-out;
		white-space: nowrap;
	}
	.modal__media-badge svg {
		width: 0.8em;
		height: 0.8em;
	}
	.modal__media a:hover .modal__media-badge {
		background: var(--hover-accent);
		color: var(--dark-background);
	}
	.modal__content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
  
	h1 {
		font-size: var(--fs-xl);
		font-weight: 700;
		margin-top: 1rem;
		margin-bottom: 10px;
	}
	p {
		font-size: var(--fs-base);
    width: 100%;
	}
  @media only screen and (max-width: 850px) {
  flex-direction: column;
  .modal__media {
    aspect-ratio: 16 / 10;
  }
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
    margin-bottom: 1rem;
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
