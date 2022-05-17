import logo from './logo.svg';
import './App.css';
import Agenda from './components/Agenda';

const contactos = [
  {
    nombre: 'Marta',
    apellidos: 'de Haro',
    direccion: 'ksdbkj',
    ciudad: 'Malaga',
    codigoPostal: 29130,
    telefono: 666666666
  },
  {
    nombre: 'Elena',
    apellidos: 'Ramirez',
    direccion: 'ksdbkj',
    ciudad: 'Toledo',
    codigoPostal: 29130,
    telefono: 666666666
  },
  {
    nombre: 'Noemi',
    apellidos: 'Rodriguez',
    direccion: 'ksdbkj',
    ciudad: 'Granada',
    codigoPostal: 29130,
    telefono: 666666666
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Agenda/>
      </header>
    </div>
  );
}

export default App;
