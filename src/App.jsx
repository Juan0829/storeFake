import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';

import Navbar from './components/Navbar';

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm] = useState('');
  const [filterTerm] = useState('');

  // Llamar a la API y obtener los datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filtrar los elementos según la búsqueda y los filtros aplicados
  useEffect(() => {
    let filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterTerm) {
      // Aplicar filtros adicionales si existen
      // Por ejemplo, podrías filtrar por categoría o precio
      filtered = filtered.filter((item) => {
        // Implementa lógica de filtro aquí
        return item.category.toLowerCase() === filterTerm.toLowerCase();
      });
    }

    setFilteredItems(filtered);
  }, [searchTerm, filterTerm, items]);

  // Lógica para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

      <div className='header'>
        <nav className="menu">
          <ul>
            <li>Inicio</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <h1>NOMBRE DE LA PAGINA</h1>
        <Navbar />
      </div>
      <div className="banner">
        <img  alt="banner" />
      </div>
      
      <div className="productos">
        {currentItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="paginas"><Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
          onPageChange={paginate}/>
      </div>
    </div>
  );
};
export default App;
