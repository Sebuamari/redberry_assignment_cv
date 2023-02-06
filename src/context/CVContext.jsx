import { useContext, useState, createContext } from "react";

const CVContext = createContext();

export const CVProvider = ({ children }) => {

    return (
      <CVContext.Provider
        value={{
        }}
      >
        {children}
      </CVContext.Provider>
    );
};

export const useCVContextContext = () => {
    return useContext(CVContext)
}