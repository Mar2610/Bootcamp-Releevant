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
          </ul>
        );
      })}
    </>
  );
}
