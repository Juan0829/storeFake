import React, {useState} from 'react';
import Search from './Search';
import Filter from './Filter';

const Navbar = () => {
  const [setSearchTerm] = useState('');
  const [setFilterTerm] = useState('');

  return (
    <div className="navbar">
      <Search onSearch={(value) => setSearchTerm(value)} />
      <Filter onFilter={(value) => setFilterTerm(value)} />
    </div>
  );
};

export default Navbar;
