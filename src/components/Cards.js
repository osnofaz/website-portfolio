import React from 'react';
import CardItem from './CardItem';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import RejuvemedStandImg from './assets/images/Stand2.png';
import PostNSImg from './assets/images/SocialMediaPosts.gif';
import PostRaf from './assets/images/FacebookAds.gif';
import StandACLImg from './assets/images/StandACL.jpeg';
import WebpageBanner from './assets/images/BannerBoomBap.gif';
import { useTranslation} from "react-i18next";



const ServicesItemsStyles = styled.div`
  .services__allItems {
    display: flex;
    gap: 10rem;
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


function Cards() {
  const {t} = useTranslation(['home']);

  return (
    <ServicesItemsStyles>
<div className='cards'>
<div className="container">
 <SectionTitle subheading={t('subheadingcards')} heading={t('projects')} />
 <div className="services__allItems">
 <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {PostNSImg}
              title={t('socialmediatitle')}
              text={t('socialmediatext')}
              path='/projects'
            />
            <CardItem
              src= {RejuvemedStandImg}
              title={t('storefronttitle')}
              text={t('storefrontdesc')}
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={PostRaf}
              title={t('fbadstitle')}
              text={t('fbadsdesc')}
              path='/projects'
            />
            <CardItem
              src={StandACLImg}
              title='Stands'
              text={t('standsdesc')}
              path='/projects'
            />
            <CardItem
              src={WebpageBanner}
              title={t('webpagebannertitle')}
              text={t('webpagebannerdesc')}
              path='/projects'
            />
          </ul>
        </div>
      </div>
 </div>
</div>
</div>
</ServicesItemsStyles>
  );
}

export default Cards;


