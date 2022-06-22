import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { MAGIC_WORD } from "../../const/magicWord";

export default function Login() {
  const [magicWord, setMagicWord] = useState("");
  const { login } = useAuthContext();

  function handleInputChange(e) {
    setMagicWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="password" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
