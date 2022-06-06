import { useUserLoginContext } from "../contexts/UserLoginContext";
import Login from "./Login";
import Welcome from "./Welcome";

export default function Layaout() {
  const { user } = useUserLoginContext();
  return (
    <div className="App">
      <h1>Hello useContext Login</h1>
      {user ? <Welcome /> : <Login />}
    </div>
  );
}