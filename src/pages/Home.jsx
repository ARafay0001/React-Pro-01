import React from "react";
import Nav from "../components/homeComponents/Nav.jsx";
import video from "../assets/bg-video.mp4";
import Button from "../components/homeComponents/Button.jsx"; 

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover top-0 left-0 -z-10 fixed  "
        // autoPlay
        muted
        loop
        src={video}
      ></video>

      <div className="font-[font300] h-screen text-[9vw] text-white uppercase leading-[9vw] flex items-center flex-col justify-between">
        <div className="flex items-center justify-center flex-col">
              <div>L'étincelle </div>
            <div className="flex items-center">
              qui
              <div className="w-[16vw] h-[7vw] -mt-3 inline-block overflow-hidden rounded-full">
                <video
                  className="w-full  h-full object-cover"
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
        <div className="flex justify-between mb-2 items-center gap-3 ">
          <Button  content={"Projects"} to={"/project"}/>
          <Button  content={"Agence"} to={"/agence"}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
