export default function Login() {
  return (
    <>
    <div>
      <h1>Login</h1>
      <form>
        <label>Usuario: </label>
        <input type="text" />
        <br/>
        <br/>
        <label>Contraseña: </label>
        <input type="password" />
        <br/>
        <br/>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    </>
  );
}
