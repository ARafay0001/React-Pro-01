import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stair = ({ children }) => {
  const stairRef = useRef(null);
  const appRef = useRef(null);
  const location = useLocation();
  // useEffect(() => {
  //   },[location.pathname]);

 useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(appRef.current, { opacity: 0, scale: 1.2 }); // start hidden
    gsap.set(stairRef.current, { display: "flex" });

    const tl = gsap.timeline({ delay: 0.05 });

    tl.from(".stairs", {
      height: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    });

    tl.to(".stairs", {
      y: "100%",
      duration: 0.45,
      stagger: 0.08,
      ease: "power3.in",
    });

    tl.add(() => {
      gsap.set(stairRef.current, { display: "none" });
    });
  }, stairRef);

  // fade in the page AFTER some delay
  gsap.to(appRef.current, {
    opacity: 1,
    delay: 1, // your timing
    duration: 1,
    scale: 1,

    ease: "power2.out",
  });

  return () => ctx.revert();
}, [location.pathname]);

  
  return (
    <>
      {/* Stair overlay on top of everything */}
      <div
        ref={stairRef}
        className="h-screen w-full fixed top-0 left-0 z-10 pointer-events-none"
        style={{ display: "none" }}
      >
        <div className="h-full w-full flex">
          <div className="stairs bg-black w-1/5"></div>
          <div className="stairs bg-black w-1/5"></div>
          <div className="stairs bg-black w-1/5"></div>
          <div className="stairs bg-black w-1/5"></div>
          <div className="stairs bg-black w-1/5"></div>
        </div>
      </div>

      {/* Page content */}
      <div  ref={appRef}>
      {children}
      </div>
    </>
  );
};

export default Stair;
