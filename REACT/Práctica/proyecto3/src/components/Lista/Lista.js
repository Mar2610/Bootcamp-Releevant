export default function Lista({ list, categoria }) {
  return (
    <>
      <h1>{categoria}</h1>
      {list.map((item) => {
        return (
          <ul>
            <li>{item.id}</li>
            <li>{item.producto}</li>
            <li>{item.marca}</li>
            <li>{item.precio}</li>
            {item.modelo && <li>{item.modelo}</li>} 
          </ul>
        );
      })}
    </>
  );
}

// {item.modelo && <li>{item.modelo}</li>}
//Este código es como una ternaria, si existe modelo, entonces muestra el modelo