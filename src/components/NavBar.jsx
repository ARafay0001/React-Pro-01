import React, { useContext, useRef } from "react";
import Logo from "./homeComponents/Logo.jsx";
import { NavContext } from "../Contexts/NavContext.js"; // import context, NOT provider

const NavBar = () => {
  const { setState } = useContext(NavContext); // useContext with NavContext
  const green = useRef(null);

  return (
    <div className="flex w-full max-w-[1920px] justify-between absolute z-10">
      <Logo />
      <div
        onClick={() => setState(true)}
        onMouseEnter={() => (green.current.style.height = "100%")}
        onMouseLeave={() => (green.current.style.height = "0")}
        className="w-60 h-10 relative menu opener cursor-pointer"
      >
        <div className="w-full h-full bg-black"></div>
        <div
          ref={green}
          className="w-full h-0 bg-[#d3fd50] absolute top-0 ease-in-out duration-300"
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
