// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <label>Filter by:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default Filter;
