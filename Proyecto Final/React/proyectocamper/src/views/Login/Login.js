import { useAuthContext } from "../../Contexts/LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const MY_AUTH_APP = "MY_AUTH_APP";
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  async function login(e) {
    e.preventDefault();
    const login = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

 
    const response = await fetch("http://localhost:3001/login", login);
    if (response.status === 200) {
      const data = await response.json()
      setAuth(data);
      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(data));
      navigate("/profile");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }


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
