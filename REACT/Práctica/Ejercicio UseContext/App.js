import { UiModeContextProvider } from "./contexts/UiModeContext";
import Foo from "./Foo";
import "./styles.css";
import Zeta from "./Zeta";

export default function App() {
  return (
    <UiModeContextProvider>
      <div className="App">
        <h1>Hello useContext</h1>
        <Foo />
        <Zeta />
      </div>
    </UiModeContextProvider>
  );
}
