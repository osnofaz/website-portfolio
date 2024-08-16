import React from 'react';
import styled from 'styled-components';

const FindMeTitleStyle = styled.div`
  text-align: center;
  p {
    margin-top: -60px;
     font-size: 25px;
  }
  h2 {
    font-size: 100px;
    margin-top: 0.5rem;
}
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function FindMeTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <FindMeTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </FindMeTitleStyle>
  );
}
