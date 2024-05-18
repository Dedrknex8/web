import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Courses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='React'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='JavaScript'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/aditlogo.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='logo'
              path='/services'
            />
            <CardItem
              src='images\adimage1.jpg'
              text='Experience science and tech here'
              label='Technology'
              path='/products'
            />
            <CardItem
              src='images/adit2.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
