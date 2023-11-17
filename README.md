# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


***PASOS PARA CREAR EL PROYECTO DESDE 0***
# Crea un nuevo proyecto Vite con React
npx create-vite my-rick-and-morty-wiki --template react

# Ingresa al directorio del proyecto
cd my-rick-and-morty-wiki

# Instala Bootstrap
npm install bootstrap



***Crea los siguientes componentes en el directorio src/components:***

Card.js
Pagination.js
Search.js
Filter.js
Navbar.js



***OJO***

En el código proporcionado para el componente principal App.jsx, la llamada a la API se realiza dentro del useEffect. Aquí tienes una explicación detallada:

// src/App.jsx
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Filter from './components/Filter';
import Navbar from './components/Navbar';

const App = () => {
  // Estado para almacenar la lista de personajes
  const [characters, setCharacters] = useState([]);

  // Estado para el número de página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de personajes por página
  const [charactersPerPage] = useState(10);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para el filtro
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Función para realizar la llamada a la API
    const fetchData = async () => {
      try {
        // Construye la URL de la API
        const apiUrl = `https://rickandmortyapi.com/api/character?name=${searchTerm}&species=${filter}`;

        // Realiza la llamada a la API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Actualiza el estado con los resultados de la API
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llama a la función fetchData al montar el componente y cada vez que cambien searchTerm o filter
    fetchData();
  }, [searchTerm, filter]);

  // Lógica de paginación
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


En el useEffect, se utiliza la función fetchData que realiza una llamada a la API de Rick and Morty. La URL de la API se construye utilizando el término de búsqueda (searchTerm) y el filtro (filter). Cuando estos valores cambian, la llamada a la API se vuelve a realizar.

La función fetchData se ejecuta la primera vez que el componente se monta y luego cada vez que searchTerm o filter cambian, asegurando que los datos se actualicen según los criterios de búsqueda y filtro del usuario.
