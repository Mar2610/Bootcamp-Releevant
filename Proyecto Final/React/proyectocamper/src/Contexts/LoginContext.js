import { useContext, createContext, useState, useMemo } from "react";
import { useCallback } from "react";

const AuthContext = createContext({
  loginUser: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const loginUser = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      loginUser,
      logout,
      isAuthenticated,
    }),
    [loginUser, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
