export default function List({ todos, setTasks }) {
  function removeTodo(id) {
    setTasks(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      {todos.map((item) => {
        return (
          <ul className="list-group container">
            <li className="list-group-item d-flex justify-content-between">
              {item.id},{item.title}{" "}
              <button
                type="button"
                onClick={() => removeTodo(item.id)}
                className="btn btn-danger"
              >
                X
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}
