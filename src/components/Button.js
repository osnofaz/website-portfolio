import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.5rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--dark-text)'};
    padding: 0.7em 0.5em;
    border: 2px solid;
    border-radius: 8px;
    display: inline-block;
    font-weight: bold;
    color: ${(props) => (props.outline ? 'var(--dark-background)' : 'var(--dark-background)')};
    transition: 0.4s ease-in-out;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
