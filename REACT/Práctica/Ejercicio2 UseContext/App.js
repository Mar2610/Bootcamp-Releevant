import Layaout from "./components/Layout";
import { UserLoginContextProvider } from "./contexts/UserLoginContext";
import "./styles.css";

export default function App() {
  return (
    <UserLoginContextProvider>
      <Layaout />
    </UserLoginContextProvider>
  );
}