// src/components/Card.js
import React from 'react';

const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
};

export default Card;
