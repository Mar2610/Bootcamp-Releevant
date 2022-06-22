import { useContext, createContext, useState, useMemo } from "react";
import { useCallback } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );
  // El operador de las dos interrogaciones es para que si no hay nada en el localStorage, no devuelva null, sino false

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []); // useCallback memoriza la función que tiene dentro para no tener que hacerla cada vez que hace un render

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  ); // useMemo memoriza objetos, en cambio useCallback solo memoriza funciones

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
