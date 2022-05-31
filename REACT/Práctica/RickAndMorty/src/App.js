import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const json = await response.json();
      setCharacters(json.results);
    }
    fetchApi();
  }, [page]);

  return (
    <div>
      <Characters character={characters} />
      <Pagination />
    </div>
  );
}

export default App;