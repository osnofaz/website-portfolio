import React, { useEffect, useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import ProjectsInfo from '../assets/data/projects';
import SectionTitle from '../SectionTitle';
import ProjectItem from '../ProjectItem';
import Footer from '../Footer';
import { useTranslation} from "react-i18next";


const ProjectStyle = styled.div`
  padding: 10rem 0;
  background-color: var(--dark-background);
  transition: 0.4s ease-in-out;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 100%;
    margin-top: 5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 30px;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
    text-align: center;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() { const [searchText, setSearchText] = useState('');
const {t} = useTranslation(['home']);

  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  return (
    
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading={t('projects')}
            subheading={t('subheadingcards')}
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder={t('projectnameholder')}
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                desc2={item.desc2}
                img={item.img}
                img2={item.img2}
                url={item.url}
                tool1={item.tool1}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
      <Footer />
    </>
  );
}
