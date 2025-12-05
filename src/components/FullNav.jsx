import React from "react";
import img01 from "../assets/landscape-images/01.png";
import img02 from "../assets/landscape-images/02.png";
import img03 from "../assets/landscape-images/03.png";
import img04 from "../assets/landscape-images/04.png";

const FullNav = () => {
  return (
    <div className="font-[font500] w-full h-screen bg-black text-white absolute z-9">
      <div className="border-y-1  text-center mt-60 border-white">
        <h1 className="uppercase text-[8vw] leading-[0.9] pt-[1vw] ">
          Projects
        </h1>
        <div className="flex items-center flex-nowrap overflow-x-auto overflow-y-hidden">
          <h2 className="whitespace-nowrap text-white font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            POUR TOUT VOIR
          </h2>

          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img02} alt="" />
          </div>

          <h2 className="whitespace-nowrap text-white font-[font500] leading-[0.9] pt-[1vw] text-[8vw]">
            POUR TOUT VOIR
          </h2>

          <div className="w-[16vw] h-[6vw] mx-[2vw] rounded-full overflow-hidden shrink-0">
            <img className="w-full object-cover" src={img02} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullNav;
