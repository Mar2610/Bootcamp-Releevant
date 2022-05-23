
export default function Agenda({ contactos, setDelete }) {

  function handleDelete(idDelete) {
    setDelete(contactos.filter((item) => item.id!==idDelete));
  }

  return (
    <>
      {contactos.map((item, index) => {
        return (
          <ul className="list-group" key={item.id}>
            <li className="list-group-item active" aria-current="true">
              Contacto {index + 1}
            </li>
            <li className="list-group-item">{item.nombre}</li>
            <li className="list-group-item">{item.apellidos}</li>
            <li className="list-group-item">{item.direccion}</li>
            <li className="list-group-item">{item.ciudad}</li>
            <li className="list-group-item">{item.codigoPostal}</li>
            <li className="list-group-item">{item.telefono}</li>
            <li className="list-group-item">
              <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-danger">
                Eliminar
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}

// Ctrl + D para borrar todos los item a la vez
// Ctrl + F para modificar todos los item
