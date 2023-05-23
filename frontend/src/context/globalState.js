import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./appReducer";

// Initial State

// Create Context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [error, setError] = useState(false);

  return (
    <GlobalContext.Provider value={{ error, setError }}>
      {children}
    </GlobalContext.Provider>
  );
};
