

export default function Formulario () {
    return (
        <>
        <h1>Nuevo contacto</h1>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nombre: </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Apellidos: </label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Dirección: </label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Ciudad: </label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Código Postal: </label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Teléfono: </label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}

<form>
            <div>
            <label for='Nombre'>Nombre: </label>
            <input type='text' placeholder = 'Nombre...'></input>
            </div>
            <div>
            <label for='Apellidos'>Apellidos: </label>
            <input type='text' placeholder = 'Apellidos...'></input>
            </div>
            <div>
            <label for='Direccion'>Dirección: </label>
            <input type='text' placeholder = 'Dirección...'></input>
            </div>
            <div>
            <label for='Ciudad'>Ciudad: </label>
            <input type='text' placeholder = 'Ciudad...'></input>
            </div>
            <div>
            <label for='CodigoPostal'>Código Postal: </label>
            <input type='text' placeholder = 'Código postal...'></input>
            </div>
            <div>
            <label for='Telefono'>Teléfono: </label>
            <input type='text' placeholder = 'Teléfono...'></input>
            </div>
        </form>