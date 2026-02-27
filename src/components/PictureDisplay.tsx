import { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import AprFront from "../assets/images/hyp-apr-16.png";
import {
  Axis2Top,
  Axis10Top,
  Axis10Front,
  Axis10Rear,
  Axis16Top,
  BijouRear,
  BijouTop,
  HeptaFront,
  HeptaRear,
  PentaRear,
  TetraRear,
  AprRear,
  DprRear,
  RcvRear,
} from "../assets/images/index";
import BijouGui from "../assets/images/bijou_mobile.png";
import BtPkg from "../assets/images/bullet_trainpkg.jpg";

interface SourceAlt {
  source: string;
  alt: string;
}
interface ImageInfo {
  rotationIndex: number;
  // imageInfo: SourceAlt;
  title: string;
  handleClick: () => void;
}

const silkscreenRotation = [
  { source: AprFront, alt: "APR-16 Front Panel Silkscreen" },
  { source: AprRear, alt: "APR-16 Rear Panel Silkscreen" },
  { source: DprRear, alt: "DPR-16 Rear Panel Silkscreen" },
  { source: RcvRear, alt: "RCV-11 Rear Panel Silkscreen" },
  { source: BijouTop, alt: "Bijou5100D Top Panel Silkscreen" },
  { source: BijouRear, alt: "Bijou5100D Rear Panel Silkscreen" },
  { source: HeptaFront, alt: "Hepta Fromt Panel Silkscreen" },
  { source: HeptaRear, alt: "Hepta Rear Panel Silkscreen" },
  { source: PentaRear, alt: "Penta Rear Panel Silkscreen" },
  { source: TetraRear, alt: "Tetra Rear Panel Silkscreen" },
  { source: Axis10Top, alt: "Axis10 Top Panel Silkscreen" },
  { source: Axis10Front, alt: "Axis10 Front Panel Silkscreen" },
  { source: Axis10Rear, alt: "Axis10 Rear Panel Silkscreen" },
  { source: Axis16Top, alt: "Axis16 Top Panel Silkscreen" },
  { source: Axis2Top, alt: "Axis2 Top Panel Silkscreen" },
];

const uiRotation = [{ source: BijouGui, alt: "Bijou2100 User Interface" }];
const graphicDesignRotation = [
  { source: BtPkg, alt: "BulletTrain HDMI Packaging" },
];

const PictureDisplay = ({ rotationIndex, handleClick, title }: ImageInfo) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLineup, setImageLineup] = useState(silkscreenRotation);
  useEffect(() => {
    //building for later
    setImageLineup(() => {
      if (rotationIndex === 0) return uiRotation;
      if (rotationIndex === 1) return silkscreenRotation;
      if (rotationIndex === 2) return graphicDesignRotation;
      return silkscreenRotation; //default to this for now
    });
  }, [rotationIndex]);

  const handleLeft = () => {
    setImageIndex(() => {
      if (imageIndex === 0) return silkscreenRotation.length - 1;
      return imageIndex - 1;
    });
  };
  const handleRight = () => {
    setImageIndex(() => {
      if (imageIndex === silkscreenRotation.length - 1) return 0;
      return imageIndex + 1;
    });
  };

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 bg-black/70 h-[100vh] w-[100vw] z-[90]"
      onClick={handleClick}
    >
      <button
        className="absolute top-4 right-4 flex gap-2 bg-black text-white p-2 rounded-lg items-center"
        title="close"
        onClick={handleClick}
      >
        <span className="text-lg">Close </span>
        <X />
      </button>
      <h1
        className="absolute top-10 left-[50%] translate-x-[-50%] bebas-neue-regular"
        style={{ textShadow: "0 0 5px black" }}
      >
        {title}
      </h1>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100vw] flex px-2 sm:px-4 text-white picture-display-container ">
        <button
          className="bg-black/80 rounded-full p-3 hover:bg-black ring-2 ring-transparent hover:ring-white transition-all disabled:pointer-events-none disabled:opacity-0"
          onClick={(e) => {
            handleLeft();
            e.stopPropagation();
          }}
          disabled={imageLineup.length <= 1 ? true : false}
        >
          <ChevronLeft size={40} />
        </button>
        <AnimatePresence mode="wait">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            key={imageLineup[imageIndex].alt}
            className="max-h-[60vh] max-w-[80vw]"
            src={imageLineup[imageIndex].source}
            alt={imageLineup[imageIndex].alt}
          />
        </AnimatePresence>
        <button
          className="bg-black/80 rounded-full p-3 hover:bg-black ring-2 ring-transparent hover:ring-white transition-all disabled:pointer-events-none disabled:opacity-0"
          onClick={(e) => {
            handleRight();
            e.stopPropagation();
          }}
          disabled={imageLineup.length <= 1 ? true : false}
        >
          <ChevronRight size={40} />
        </button>
      </div>
      {/* <img
        className="absolute max-h-[80vh] max-w-[80vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={imageInfo.source}
        alt={imageInfo.alt}
      /> */}

      <div
        className="carousel absolute left-[50%]  translate-x-[-50%]  bottom-10 transition-transform duration-500 ease-in-out h-[100px] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 w-[80vw] overflow-x-auto h-full items-center">
          {imageLineup.length > 1 ? (
            imageLineup.map((item, index) => (
              <button
                className={`${index === imageIndex ? "bg-purple-200/60" : "bg-white/20"} shrink-0 shadow-black shadow-lg p-2 cursor-pointer ring-2 ring-transparent hover:ring-white rounded-md h-20 w-20 transition-all duration-300 flex items-center justify-center overflow-hidden`}
                onClick={() => setImageIndex(index)}
              >
                <img
                  src={item.source}
                  alt={item.alt}
                  key={item.alt}
                  className="w-full h-full object-contain"
                />
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PictureDisplay;
