import './App.css';
import Agenda from './components/Agenda';
import Formulario from './components/Formulario';
import { useState } from "react";

const contactos = [
  {
    id: 1,
    nombre: 'Marta',
    apellidos: 'de Haro',
    direccion: 'ksdbkj',
    ciudad: 'Malaga',
    codigoPostal: 29130,
    telefono: 666666666
  },
  {
    id: 2,
    nombre: 'Elena',
    apellidos: 'Ramirez',
    direccion: 'ksdbkj',
    ciudad: 'Toledo',
    codigoPostal: 29130,
    telefono: 666666666
  },
  {
    id: 3,
    nombre: 'Noemi',
    apellidos: 'Rodriguez',
    direccion: 'ksdbkj',
    ciudad: 'Granada',
    codigoPostal: 29130,
    telefono: 666666666
  }
];

function App() {
  const [users, setUsers] = useState(contactos);

  return (
    <div className="App">
      <header className="App-header">
        <Agenda contactos={users} setDelete={setUsers}/>
        <Formulario handleUsers={setUsers}/>
      </header>
    </div>
  );
}

export default App;
