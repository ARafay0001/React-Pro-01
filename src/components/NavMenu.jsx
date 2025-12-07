import React, { useContext } from "react";
import img01 from "../assets/landscape-images/01.png";
import img02 from "../assets/landscape-images/02.png";
import img03 from "../assets/landscape-images/03.png";
import img04 from "../assets/landscape-images/04.png";
import NavKey from "./navKey";
import Logo from "./homeComponents/Logo.jsx";
import { NavContext } from "../Contexts/NavContext.js";

const NavMenu = () => {
  const { state, setState } = useContext(NavContext);

  return (
    <div
      className={`font-[font500] w-full h-screen bg-black text-white overflow-hidden fixed z-50 transition-all duration-500 ${
        state ? "top-0" : "-top-full"
      }`}
    >
      
      <div className="h-[8vw] md:h-[70px] relative flex items-center justify-between px-[4vw] md:px-6">
        
        <div className="pb-[2vw] md:pb-0">
          <Logo color={"white"} />
        </div>

        
        <div
          onClick={() => setState(false)}
          className="absolute h-[8vw] w-[8vw] md:h-[50px] md:w-[50px] 
          flex justify-center items-center top-[1vw] right-[4vw] cursor-pointer"
        >
          <div className="bg-[#d3fd50] absolute h-[8vw] md:h-[50px] w-[3px] rotate-45"></div>
          <div className="bg-[#d3fd50] absolute h-[8vw] md:h-[50px] w-[3px] -rotate-45"></div>
        </div>
      </div>

      {/* MENU LINKS */}
      <div className="flex flex-col s:mt-[80%] md:mt-[5%]">

        <div className="link relative border-y border-white h-[8vw] md:h-[8vw] overflow-hidden text-center">
          <NavKey img={img02} text="POUR TOUT VOIR" head="PROJECTS" to="/project" />
        </div>

        <div className="link relative border-y border-white h-[8vw] md:h-[8vw] overflow-hidden text-center">
          <NavKey img={img01} text="POUR TOUT SAVOIR" head="AGENCE" to="/agence" />
        </div>

        <div className="link relative border-y border-white h-[8vw] md:h-[8vw] overflow-hidden text-center">
          <NavKey img={img03} text="POUR ENVOYER UN FAX" head="CONTACT" to="/contact" />
        </div>

        <div className="link relative border-y border-white h-[8vw] md:h-[8vw] overflow-hidden text-center">
          <NavKey img={img04} text="LIER LES ARTICLES" head="BLOGUE" to="/blog" />
        </div>

      </div>
    </div>
  );
};

export default NavMenu;
