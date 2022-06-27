import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const login = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    const response = await fetch("http://localhost:3001/login", login);
    response.status === 200
      ? navigate("/profile")
      : alert("Usuario o contraseña incorrectos");
  }

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  function handleInputs(e) {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={login}>
          <label>Usuario: </label>
          <input
            type="text"
            value={user.userName}
            name="userName"
            onChange={handleInputs}
          />
          <br />
          <br />
          <label>Contraseña: </label>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handleInputs}
          />
          <br />
          <br />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </>
  );
}
