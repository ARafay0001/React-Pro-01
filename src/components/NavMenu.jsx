import React, { useContext } from "react";
import img01 from "../assets/landscape-images/01.png";
import img02 from "../assets/landscape-images/02.png";
import img03 from "../assets/landscape-images/03.png";
import img04 from "../assets/landscape-images/04.png";
import NavKey from "./navKey";
import Logo from "./homeComponents/Logo.jsx";
import { NavContext } from "../Contexts/NavContext.js"; // import context

const NavMenu = () => {
  const { state, setState } = useContext(NavContext); // useContext with NavContext

  return (
    <div
      className={`font-[font500] w-full h-screen bg-black text-white overflow-hidden absolute z-10 transition-all duration-500 ${
        state ? "top-0" : "-top-full"
      }`}
    >
      <div className="h-[8vw] relative flex items-center justify-between">
        <div className="pb-[3vw]">
          <Logo />
        </div>
        <div
          onClick={() => setState(false)}
          className="absolute h-[8vw] flex justify-center items-center w-[8vw] top-[0.1vw] cursor-pointer right-0"
        >
          <div className="bg-[#d3fd50] absolute h-[8vw] w-[3px] rotate-45"></div>
          <div className="bg-[#d3fd50] absolute h-[8vw] w-[3px] -rotate-45"></div>
        </div>
      </div>

      <div className="link relative border-y h-[8vw] overflow-hidden border-white text-center">
        <NavKey img={img02} text={"POUR TOUT VOIR"} head={"PROJECTS"} to={"/project"} />
      </div>
      <div className="link relative border-y h-[8vw] overflow-hidden border-white text-center">
        <NavKey img={img01} text={"POUR TOUT SAVOIR"} head={"AGENCE"} to={"/agence"} />
      </div>
      <div className="link relative border-y h-[8vw] overflow-hidden border-white text-center">
        <NavKey img={img03} text={"POUR ENVOIER UN FAX"} head={"CONTACT"} to={"/contact"} />
      </div>
      <div className="link relative border-y h-[8vw] overflow-hidden border-white text-center">
        <NavKey img={img04} text={"LIER LES ARTICALS"} head={"BLOGUE"} to={"/blog"} />
      </div>
    </div>
  );
};

export default NavMenu;
