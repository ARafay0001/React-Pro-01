import { useRef, useContext, useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { NavContext } from "../Contexts/NavContext.js";

const Stair = ({ children }) => {
  const stairRef = useRef(null);
  const appRef = useRef(null);
  const location = useLocation();
  const { state } = useContext(NavContext); // Nav menu state, optional

  useEffect(() => {
    // GSAP context for scoped selectors
    const ctx = gsap.context(() => {
      // Start hidden and slightly scaled
      gsap.set(appRef.current, { opacity: 0, scale: 1.2 });
      gsap.set(stairRef.current, { display: "flex", backgroundColor: "transparent" }); // transparent overlay

      const tl = gsap.timeline({ delay: 0.05 });

      // Animate stairs in
      tl.from(".stairs", {
        height: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      });

      // Animate stairs out
      tl.to(".stairs", {
        yPercent: 100,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.in",
      });

      // Hide overlay after animation
      tl.add(() => {
        gsap.set(stairRef.current, { display: "none" });
      });
    }, stairRef);

    // Fade in the page content AFTER stairs animation
    gsap.to(appRef.current, {
      opacity: 1,
      scale: 1,
      delay: 1, // adjust based on your stairs duration
      duration: 1,
      ease: "power2.out",
    });

    return () => ctx.revert(); // cleanup
  }, [location.pathname, state]); // re-run on route change

  return (
    <>
      {/* Stair overlay */}
      <div
        ref={stairRef}
        className="h-screen w-full fixed top-0 left-0 z-10 pointer-events-none"
        style={{ display: "none", backgroundColor: "transparent" }}
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
      <div ref={appRef}>{children}</div>
    </>
  );
};

export default Stair;
