import { useContext, createContext, useState, useMemo } from "react";

const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
});

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContextProvider({ children }) {
  const user = JSON.parse(window.localStorage.getItem(MY_AUTH_APP))
  const [auth, setAuth] = useState(
    user ?? null
  );

  const value = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth, setAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
