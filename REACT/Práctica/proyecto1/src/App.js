import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { Fragment } from "react";
import Alumno from './components/Alumno'
import Alumnos from './components/Alumnos'

const alumnos = [
  {
    nombre: "Marta",
    edad: 27,
    telefono: 666666666,
    email: "marta@gmail.com"
  },
  {
    nombre: "Raul",
    edad: 27,
    telefono: 666666666,
    email: "marta@gmail.com"
  },
  {
    nombre: "Abel",
    edad: 27,
    telefono: 666666666,
    email: "marta@gmail.com"
  },
  {
    nombre: "Barbara",
    edad: 27,
    telefono: 666666666,
    email: "marta@gmail.com"
  }
]

function App() {
  return (
    <>
      <header className="App-header">
        <Title name = "Marta"/>
        {/* <Alumno alumno = {alumno}/> */}
        <Alumnos alumnos={alumnos}/>
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
          Releevant Learn React
        </a>
      </header>
      <p>Footer</p>
    </>
  );
}

export default App;
