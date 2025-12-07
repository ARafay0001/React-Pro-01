import React from "react";
import Nav from "../components/homeComponents/Nav.jsx";
import video from "../assets/bg-video.mp4";
import Button from "../components/homeComponents/Button.jsx";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🔥 Background Video (still here) */}
      <video
        className="w-full h-full object-cover fixed top-0 left-0 -z-10"
        autoPlay
        muted
        loop
        src={video}
      ></video>

      {/* NAV if needed */}
      {/* <Nav /> */}

      {/* MAIN TEXT + BUTTONS */}
      <div className="font-[font300] h-screen text-white uppercase flex flex-col items-center justify-between px-4 md:px-10">
        {/* TEXT BLOCK */}
        <div
          className="
            flex items-center justify-center flex-col 
            text-[10vw] leading-[10vw] mt-[100%] md:mt-[0%]        
            md:text-[7vw] md:leading-[7vw]   
            lg:text-[6vw] lg:leading-[6vw]    
          "
        >
          <div>L'étincelle</div>

          <div className="flex items-center">
            qui
            <div
              className="
                w-[30vw] h-[14vw]       
                md:w-[18vw] md:h-[8vw]  
                lg:w-[16vw] lg:h-[7vw]  
                -mt-2 inline-block overflow-hidden rounded-full mx-2
              "
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={video}
              ></video>
            </div>
            génère
          </div>

          <div>la créativité</div>
        </div>

        <div
          className="
            flex justify-between mb-4 items-center gap-3 
            text-[5vw] md:text-[2.5vw] lg:text-[1.8vw]
          "
        >
          <Button content={"Projects"} to={"/project"} />
          <Button content={"Agence"} to={"/agence"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
