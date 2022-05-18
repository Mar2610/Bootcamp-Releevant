

export default function Agenda({contactos}) {
    return (
        <>
        {contactos.map((item) => {
            return (
              <>
              <ul>
                <li>{item.nombre}</li>
                <li>{item.apellidos}</li>
                <li>{item.direccion}</li>
                <li>{item.ciudad}</li>
                <li>{item.codigoPostal}</li>
                <li>{item.telefono}</li>
              </ul>
              </>
            );
          })}
        </>
    )
}

// Ctrl + D para borrar todos los item a la vez
// Ctrl + F para modificar todos los item