import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Search from './components/Search';
import desktop from './assets/img/desktop.jpg';

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

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

  // Filtrar los elementos según categoria
  useEffect(() => {
    let filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterTerm) {
        filtered = filtered.filter((item) => {
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
//renderizado
  return (
    <div>

      <Navbar />

      <img className="banner" src={desktop}/>

      <div className="buscar">
        <Search className="search" onSearch={(value) => setSearchTerm(value)} />
        <Filter className="filter" onFilter={(value) => setFilterTerm(value)} />
      </div>
      
      
      <div className="products">
        {currentItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="pages"><Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
          onPageChange={paginate}/>
      </div>

    </div>
  );
};
export default App;
