import { useState } from "react";
import { useUserLoginContext } from "../../Contexts/LoginContext";
export default function Login() {
  
  const { login } = useUserLoginContext();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleInputs(e) {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  }

  return (
    <>
    <div>
      <h1 className="d-flex justify-content-center">Login</h1>
      <form onSubmit={(e) => login(user, e)} className=" d-flex justify-content-center">
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleInputs}
          placeholder="Introduce email"
        />
        <br/>
        <br/>
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleInputs}
          placeholder="Introduce contraseña"
        />
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}
