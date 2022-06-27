import { createContext, useContext } from "react";

export const UserLoginContext = createContext({
  user: {},
});

export function UserLoginContextProvider({ children }) {
  const [user, setUser] = useContext();

  const value = {
    user
  };

  return (
    <UserLoginContext.Provider value={value}>
      {children}
    </UserLoginContext.Provider>
  );
}

export function useUserLoginContext() {
  return useContext(UserLoginContext);
}