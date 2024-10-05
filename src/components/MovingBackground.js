import React from 'react';
import './MovingBackground.css'; // Make sure to create this CSS file in the same directory
import omenImage from './omen.jpg'; // Ensure this is the correct path to your image

const MovingBackground = () => {
  return (
    <div className="moving-background">
      <img src={omenImage} alt="Omen" className="omen-image" />
    </div>
  );
};

export default MovingBackground;




