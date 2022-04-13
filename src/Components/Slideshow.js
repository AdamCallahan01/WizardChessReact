import React from 'react';
import { Slide } from 'react-slideshow-image';
import CombineTwo from '../images/CombineTwo.png';
import PlaceTwoPawns from '../images/PlaceTwoPawns.png';
import RemovePiece from '../images/RemovePiece.png';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  '../images/CombineTwo.png',
  '../images/PlaceTwoPawns.png',
  '../images/RemovePiece.png'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={CombineTwo} alt="useful"></img>
            </div>
          </div>
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <img src={PlaceTwoPawns} alt="useful"></img>
            </div>
          </div>
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img src={RemovePiece} alt="useful"></img>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;