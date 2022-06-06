import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search"
import Switch from "./Components/Switch/Switch";
import Login from "./Components/Login"
import {useUserLoginContext} from "./Contexts/LoginContext"

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const {user} = useUserLoginContext();

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}`);
      const json = await response.json();
      setCharacters(json.results);
      setTotalPages(json.info.pages);
    }
    fetchApi();
  }, [currentPage, search]);

  return (
    <>
    {user ? <div>
      <Search setSearch={setSearch}/>
      <br/>
      <Switch/>
      <Characters character={characters} setDelete={setCharacters}/>
      <Pagination count={totalPages} page={currentPage} handlePagination={setCurrentPage} />
    </div> : <Login/>}
    </>
  );
}

export default App;