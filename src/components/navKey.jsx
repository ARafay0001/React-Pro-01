import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../Contexts/NavContext.js"; // ✅ import context, NOT provider

const NavKey = ({ img, text, to, head }) => {
  const { setState } = useContext(NavContext); // ✅ correct usage
  return (
    <Link onClick={() => setState(false)} to={to}>
      <h1 className="link select-none cursor-pointer uppercase text-[8vw] leading-[0.9] pt-[0.9vw]">
        {head}
      </h1>
      {/* Marquee Wrapper */}
      <div className="moveLink absolute top-[-9vw] h-[8vw] w-full bg-[#d3fd50]">
        {/* First strip */}
        <div className="moveX absolute top-0 flex items-center flex-nowrap overflow-hidden">
          <h2 className="whitespace-nowrap text-black font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            {text}
          </h2>
          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img} alt="Landscape 1" />
          </div>
          <h2 className="whitespace-nowrap text-black font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            {text}
          </h2>
          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img} alt="Landscape 2" />
          </div>
        </div>

        {/* Second strip */}
        <div className="moveX absolute top-0 flex items-center flex-nowrap overflow-hidden translate-x-full bg-[#d3fd50]">
          <h2 className="whitespace-nowrap text-black font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            {text}
          </h2>
          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img} alt="Landscape 1" />
          </div>
          <h2 className="whitespace-nowrap text-black font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            {text}
          </h2>
          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img} alt="Landscape 2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavKey;
