import './App.css';
import './Components/Characters'
import { useState, useEffect } from "react";

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const json = await response.json();
      setCharacters(json);
    }
    fetchApi();
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
