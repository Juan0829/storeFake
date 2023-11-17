import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Filter from './components/Filter';
import Navbar from './components/Navbar';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the Rick and Morty API
      // Use searchTerm and filter to customize the API request
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchData();
  }, [searchTerm, filter]);

  // Pagination
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div>
      <Navbar />
      <Search setSearchTerm={setSearchTerm} />
      <Filter setFilter={setFilter} />
      {currentCharacters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
