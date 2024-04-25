import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 0.7rem;
  background-color: var(--dark-footer);
  display: flex;
  align-items: center;
  gap: 3rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-weight: bold;
  .icon {
    color: var(--dark-footer);
    background-color: var(--dark-text);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
  .info{
    font-size: 17px;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
    .icon {
      padding: 0.3rem;
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'Osnofaz ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
