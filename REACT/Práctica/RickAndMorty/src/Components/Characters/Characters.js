export default function Characters({ character, setDelete }) {

  function handleDelete(idDelete) {
    setDelete(character.filter((character) => character.name!==idDelete));

  }
  return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {character.map((char) => (
            <div className="card justify-content-between">
              <img className="card-img-top" src={char.image} />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">{char.gender}</p>
                <a className="btn btn-primary m-1">Detalles</a>
                <a className="btn btn-danger row m-1" onClick={() => handleDelete(char.name)}>Eliminar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}