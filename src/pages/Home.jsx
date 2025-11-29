import React from 'react'
import Nav from "../components/homeComponents/Nav.jsx"
import video from "../assets/bg-video.mp4"

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      
      <video 
        className="w-full h-full object-cover top-0 left-0 -z-10 fixed  "
        autoPlay 
        muted 
        loop 
        src={video}
      ></video>

      {/* Page Content */}
      <h1 className="text-white text-5xl font-bold mt-20 ml-10">
        Home
      </h1>

    </div>
  )
}

export default Home
