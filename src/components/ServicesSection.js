import React from 'react';
import { MdDesktopMac, MdCode, MdDesignServices } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import { useTranslation} from "react-i18next";

const ServicesItemsStyles = styled.div`
  .services__allItems {
    display: flex;
    gap: 8rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  const {t} = useTranslation(['home']);
  return (
    <ServicesItemsStyles>
       <div className='cards'>
      <div className="container">
        <SectionTitle subheading={t('subheading')} heading={t('services')} />
        <div className="services__allItems">
        <ServicesSectionItem
            icon={<MdDesignServices />}
            title={t('graphicdesign')}
            desc={t('graphicdesigndesc')}
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc={t('webdesigndesc')}
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc={t('webdevdesc')}
          />
        </div>
      </div>
      </div>
    </ServicesItemsStyles>
  );
}
