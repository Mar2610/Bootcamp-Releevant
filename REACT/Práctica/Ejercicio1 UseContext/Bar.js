import { useUiModeContext } from "./contexts/UiModeContext";
import "./Bar.css";

export default function Bar() {
  console.log("Render de Bar");

  const { uiMode } = useUiModeContext();
  return <div className={uiMode}>El valor de uiMode es: {uiMode}</div>;
}
