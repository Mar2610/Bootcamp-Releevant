import { createContext, useState, useContext } from "react";

const UiModeContext = createContext({
  uiMode: "",
  toggleUiMode: () => {},
});

export function UiModeContextProvider({ children }) {
  const [uiMode, setUiMode] = useState("light");

  function toggleUiMode() {
    setUiMode((oldUiMode) => {
      if (oldUiMode === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }

  const value = {
    uiMode,
    toggleUiMode,
  };

  return (
    <UiModeContext.Provider value={value}>{children}</UiModeContext.Provider>
  );
}

export function useUiModeContext() {
  return useContext(UiModeContext);
}
