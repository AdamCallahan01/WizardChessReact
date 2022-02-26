import React from 'react';
import '../App.css';
import { Button } from './Button';
import './DefaultPage.css';
import { Link } from 'react-router-dom';


function DefaultPage() {
  return (
    <div className='hero-container'>
      <h1>Chess, but actually fun????</h1>
      <p>The traditional game of chess with a fun, modern spin</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={<Link to='/layouts'></Link>}
        >
          Play the game!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Final Video Presentation <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default DefaultPage;