import React, { createContext, useReducer, useState } from "react";

// Create Context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [error, errorHandler] = useState(false);

  return (
    <GlobalContext.Provider value={{ error, errorHandler }}>
      {children}
    </GlobalContext.Provider>
  );
};
