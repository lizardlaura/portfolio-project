import { useEffect, useRef } from "react";
import hero from "../assets/images/hero_image.jpg";

const BusinessCard = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      // setPosition({ x: e.clientX, y: e.clientY });
      // console.log({ x: e.clientX, y: e.clientY });
      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;
      const element = cardRef.current;
      if (!element) return;
      // console.log(offsetX);
      element.style.setProperty('--rotateX', -1*offsetY + "deg");
      element.style.setProperty("--rotateY", offsetX + "deg");

      const light =lightRef.current
      if(!light) return
      const elHeight = element.getBoundingClientRect().height
      console.log(elHeight)
      light.style.setProperty('--positionX', x+"px")
 light.style.setProperty('--positionY', y-elHeight + "px");
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="businesscard relative" ref={cardRef}>
      <div className="flex gap-8 items-center justify-evenly h-full">
        <div className="image-cropper">
          <img src={hero} />
        </div>
        <div className="chosen-font flex flex-col gap-2">
          <span className="text-[4rem] text-shadow-default">Laura Saidi</span>
          <span className="text-3xl text-shadow-default">
            Web developer and graphic designer
          </span>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full sheen" />
      <div className="absolute inset-0 h-10 w-10 spotlight" ref={lightRef} />
    </div>
  );
};

export default BusinessCard;
