import { useState } from "react";

export default function Input({ newTasks }) {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  const newTodos = {
    id: 234,
    title: input,
    completed: false
  }

  function handleSubmit(e) {
    e.preventDefault();
    newTasks((inputs) => [newTodos, ...inputs]);
    setInput("");
  }

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 container">
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            value={input}
            placeholder="Introduce tarea..."
          ></input>
          <br />
          <button type="button" onClick={handleSubmit} className="btn btn-dark">
            Añadir
          </button>
        </div>
      </form>
    </>
  );
}
