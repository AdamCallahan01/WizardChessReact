import React from 'react';
import '../../App.css';
import Slideshow from '../Slideshow';

function DesignIdea() {
  return (
    <>
      <div className='hero-container'>
      <h1>Game Design</h1>
      <ul>Project Goals:
        <li>1.	Create a chess interface</li>
        <li>2.	Implement different classes/formations</li>
        <li>3.	Implement items/abilities</li>
        <li>4.	Implement the ability to combine pieces/ make new pieces</li>
        <li>5.	Make the game playable over the website</li>
        <li>6.	Create new ways to win</li>
      </ul>
      <p><big>Game Abilities:</big></p>
    </div>
    <Slideshow></Slideshow>
    </>
  );
}

export default DesignIdea;