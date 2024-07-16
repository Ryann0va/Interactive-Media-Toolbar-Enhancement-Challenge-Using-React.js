//U99350821
import React, { useState } from 'react';
import './RateMovieButton.css'; 

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div className="rate-movie-button">
      <h2>Rate {movie}</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      {showConfirmation && <p>Thank you for rating!</p>}
    </div>
  );
};

export default RateMovieButton;
