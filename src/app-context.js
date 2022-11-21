import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [data, updateAppData] = useState([]);

  return (
    <AppContext.Provider value={{ data, updateAppData }}>
      {children}
    </AppContext.Provider>
  );
}
