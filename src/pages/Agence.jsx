import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img01 from "../assets/Images/01.png";
import img02 from "../assets/Images/02.png";
import img03 from "../assets/Images/03.png";
import img04 from "../assets/Images/04.png";
import img05 from "../assets/Images/05.png";
import img06 from "../assets/Images/06.png";
import img07 from "../assets/Images/07.png";
import img08 from "../assets/Images/08.png";
import img09 from "../assets/Images/09.png";
import img10 from "../assets/Images/10.png";

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imgArray = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 23%",
        end: "top -100%",
        scrub: true,
        markers: true,
        pin: true,
        onUpdate: (self) => {
          let rawIndex = self.progress * imgArray.length;
          let index = Math.floor(rawIndex);

          // Keep index inside valid range
          if (index >= imgArray.length) index = imgArray.length - 1;
          if (index < 0) index = 0;

          // Your custom logic: last 5 images after reaching end
          let finalIndex = index;
 
          if (self.progress >= 1) {
            finalIndex = imgArray.length - 5;
          }

          imgRef.current.src = imgArray[finalIndex];
          // const random = Math.floor(Math.random() * (imgArray.length - 1))
          // console.log(random)
          // imgRef.current.src = imgArray[random];

          
        },
      },
    });
  }, []);

  return (
    <div>
      <div
        ref={imgDivRef}
        className="w-[15vw] h-[19vw] rounded-[1.5vw] overflow-hidden absolute top-38 left-[30%]"
      >
        <img
          ref={imgRef}
          className="w-full h-full object-cover"
          src={imgArray[0]}
          alt=""
        />
      </div>

      <div className="relative">
        <div className="text-[20vw] font-[font500] text-center leading-[18vw] mt-[25%] uppercase">
          Soixan7e Douze
        </div>

        <div className="flex justify-end">
          <div className="text-6xl font-[font500] w-[50%]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </div>
        </div>
      </div>

      {/* Preload images
      <div style={{ display: "none" }}>
        {imgArray.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div> */}
    </div>
  );
};

export default Agence;
