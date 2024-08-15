import React from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';


const FooterStyle = styled.div`
  background-color: var(--dark-footer);
  padding-top: 30px;
  transition: 0.4s ease-in-out;
  position: relative;
  background-color: var(--dark-footer);
  z-index: 0;

  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 35px;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-copyright);
    text-align: center;
    padding: 1rem 0;
    margin-top: 20px;
    
  }
  @media only screen and (max-width: 768px) {
    p{
      text-align: center;
    }
    
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 1rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyrightz{
      font-size: 13px;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  const {t} = useTranslation(['common']);

  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Afonso Pereira</h1>
          <PText>
          {t('footerdesc')}
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading={t('importantlinksdesc')}
            links={[
              {
                title:t('homefooter'),
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title:t('aboutmefooter'),
                path: '/about',
              },
              {
                type: 'Link',
                title:t('projectsfooter'),
                path: '/projects',
              },
              {
                type: 'Link',
                title:t('contactfooter'),
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading={t('contactinfofooter')}
            links={[
              {
                title: 'info@afonsopereira.com',
                path: 'mailto:info@afonsopereira.com',
              },
              {
                title: 'Discord: Osnofaz#6047',
                path: 'https://discordapp.com/users/108079672763355136/',
              },
              {
                title: 'Abrantes, Santarém, Portugal',
                path: 'https://www.google.com/maps/place/Abrantes/data=!4m2!3m1!1s0xd186db13a4cbafb:0x4e8265a16f3af852?sa=X&ved=2ahUKEwji6eC8pc71AhWwBmMBHfcjATAQ8gF6BAgWEAE',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading={t('sociallinksfooter')}
            links={[
              { icon: <i className="fab fa-facebook-square"/>,
                title: 'Facebook',
                path: 'https://www.facebook.com/OsNoFaP',
              },
              { icon: <i className="fab fa-linkedin"/>,
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/mafonso-pereira',
              },
              { icon: <i className="fab fa-instagram-square"/>,
                title: 'Instagram',
                path: 'http://instagram.com/osnofaz',
              },
              { icon: <i className="fab fa-twitch"/>,
                title: 'Twitch',
                path: 'http://twitch.com/osnofaz',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container copyrightz">
          <PText>
            © 2024 - Osnofaz | {t('designedby')}{' '}
            <a target="_blank" style={{color: 'var(--dark-text)'}} rel="noopener noreferrer" href="https://www.afonsopereira.com">
              Afonso Pereira
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
