import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the EVENTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='EVENT1'
              label='TECH'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='EVENT_2'
              label='TECH'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='EVENT_3'
              label='LEISURE'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='EVENT_4'
              label='TECH'
              path='/events'
            />
            <CardItem
              src='images/img-7.jpg'
              text='EVENT_5'
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
