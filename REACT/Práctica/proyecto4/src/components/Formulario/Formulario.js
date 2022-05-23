import { useState } from "react";

export default function Formulario({ handleUsers }) {

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefono, setTelefono] = useState("");

  function handleName(event) {
    setNombre(event.target.value);
  }

  function handleSurname(event) {
    setApellidos(event.target.value);
  }

  function handleAddress(event) {
    setDireccion(event.target.value);
  }

  function handleCity(event) {
    setCiudad(event.target.value);
  }

  function handleCp(event) {
    setCodigoPostal(event.target.value);
  }

  function handlePhone(event) {
    setTelefono(event.target.value);
  }

  const user = {
    nombre,
    apellidos,
    direccion,
    ciudad,
    codigoPostal,
    telefono,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    handleUsers((users) => [...users, user]);
    setNombre("");
    setApellidos("");
    setDireccion("");
    setCiudad("");
    setCodigoPostal("");
    setTelefono("");
  }

  return (
    <>
      <div className="classForm">
      <form onSubmit={handleSubmit} className="form">
      <h1>Nuevo contacto</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={handleName}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Apellidos:
          </label>
          <input
            type="text"
            value={apellidos}
            onChange={handleSurname}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Dirección:
          </label>
          <input
            type="text"
            value={direccion}
            onChange={handleAddress}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ciudad:
          </label>
          <input
            type="text"
            value={ciudad}
            onChange={handleCity}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Código Postal:
          </label>
          <input
            type="text"
            value={codigoPostal}
            onChange={handleCp}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Teléfono:
          </label>
          <input
            type="text"
            value={telefono}
            onChange={handlePhone}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
      </form>
      </div>
    </>
  );
}
