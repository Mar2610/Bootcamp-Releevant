import './App.css';
import Input from './components/Input'
import List from './components/List'
import { useState, useEffect } from "react";

const todos = [{
  id: "",
  title: "",
  completed: ""
}];

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setTasks(json.slice(0,20));
    }
    fetchApi();
  }, []);

  return (
    <div className="App">
      <Input newTasks={setTasks}/>
      <List todos={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
