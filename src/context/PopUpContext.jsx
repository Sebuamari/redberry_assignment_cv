import { useContext, useState, createContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popupActive, setPopupActive] = useState(false);

    return (
      <PopupContext.Provider
        value={{
          popupActive,
          setPopupActive
        }}
      >
        {children}
      </PopupContext.Provider>
    );
};

export const usePopUpContext = () => {
    return useContext(PopupContext)
}