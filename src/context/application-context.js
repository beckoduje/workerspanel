import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
