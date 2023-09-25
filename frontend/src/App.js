import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { fetchDataFromAPI } from './components/api';
import Welcome from './components/welcome';
import SearchBar from './components/searchbar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const results = await fetchDataFromAPI(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Welcome />
      <SearchBar onSearch={handleSearch} />
      <div className="results">
        <h2>Resultados de la búsqueda:</h2>
        <ul>
          {searchResults.map((character) => (
            <li key={character.id}>{character.name}</li>
            // Puedes renderizar otros datos relevantes del personaje aquí
          ))}
        </ul>
      </div>
    </div>
  );

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
