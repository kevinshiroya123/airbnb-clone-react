import React from 'react';
import './Card.css'; // Add styles for the card

const Card = ({ image, title, description }) => {
  return (
    <div className="card"> {/* Renamed class */}
      <img src={image} alt={title} />
      <div className="card__content"> {/* Renamed for clarity */}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
