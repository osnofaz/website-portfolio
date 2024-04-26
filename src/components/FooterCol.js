import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`

  .heading {
    font-size: 25px;
    margin-bottom: 1.5rem;
  }
  
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 16px;
    color: var(--dark-text)
  }

  @media only screen and (max-width: 768px) {
    .heading{
     text-align:center;
    }
    .formatz{
      text-align:center;
      font-size:17px;
      margin-bottom: 0.6rem;
    }

   }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li className="formatz" key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a className="formatztext" rel="noopener noreferrer" href={item.path} target="_blank">
                 {item.icon}          {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
