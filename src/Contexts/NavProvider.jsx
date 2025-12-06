import React, { useState } from "react";
import { NavContext } from "./NavContext.js";

export const NavContextProvider = ({ children }) => {
  const [state, setState] = useState(false); // nav open/close state

  return (
    <NavContext.Provider value={{ state, setState }}>
      {children}
    </NavContext.Provider>
  );
};
