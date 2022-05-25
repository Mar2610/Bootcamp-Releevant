import './App.css';
import Card from './components/Card';

const card = {
  image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/04/doctor-strange-multiverso-locura-2667447.jpg?itok=SaC4CrLT',
  title: 'Doctor Strange',
  text: 'Doctor Strange en el multiverso de la locura · Dirigida por. Sam Raimi · Reparto. Benedict Cumberbatch, Elizabeth Olsen, Benedict Wong...',
  link: 'https://www.disney.es/peliculas/doctor-strange-en-el-multiverso-de-la-locura',
  buttonText: 'Ir a la película'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card content = {card}/>
      </header>
    </div>
  );
}

export default App;
