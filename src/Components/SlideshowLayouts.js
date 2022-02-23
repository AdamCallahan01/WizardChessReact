import React from 'react';
import { Slide } from 'react-slideshow-image';
import image1 from '../images/chess set up knight.png';
import image2 from '../images/chess set up pawns.png';
import image3 from '../images/chesss set up bishop.png';
import image4 from '../images/chessse t up queen.png';
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
              <img src={image1}></img>
            </div>
          </div>
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <img src={image2}></img>
            </div>
          </div>
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img src={image3}></img>
            </div>
          </div>
          <div className="each-slide">
            <div className="img-format" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img src={image4}></img>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;