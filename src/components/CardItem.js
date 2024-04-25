import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Pic'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 className='cards__item__title'>{props.title}</h3>
            <p className='cards__item__text'>{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
