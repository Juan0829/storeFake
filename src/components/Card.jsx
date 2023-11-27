import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.category}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default Card;
