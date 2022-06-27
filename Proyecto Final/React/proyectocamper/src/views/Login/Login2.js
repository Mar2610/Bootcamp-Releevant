import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Assign React state and constants to context object
  const AppContextObject = {
    apiValue: {
        user,
        setUser,
    }
  };
  
  return (
    <AppContext.Provider value={AppContextObject}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to provide access to context object
export const useAppContext = () => {
  return useContext(AppContext);
};
