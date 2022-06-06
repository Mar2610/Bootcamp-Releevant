import { useState } from "react";
import { useUserLoginContext } from "../contexts/UserLoginContext";
export default function Login() {
  const { login } = useUserLoginContext();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleLogin(e) {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => login(user, e)}>
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleLogin}
          placeholder="Introduce email"
        />
        <br />
        <br />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleLogin}
          placeholder="Introduce contraseña"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
