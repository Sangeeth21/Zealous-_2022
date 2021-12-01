import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted  />
      <h1>COMING SOON..</h1>
      <p>ZEALOUS 2022</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REGISTER<i className='far fa' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
