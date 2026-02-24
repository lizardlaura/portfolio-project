// import portfolio from '.././assets/portfolio.json'
import HeroBanner from "../components/HeroBanner";
import Portfolio from "../components/Portfolio";
import bijouScreenshot from "../assets/images/bijou_mobile.png";
import btPkg from "../assets/images/bullet_trainpkg.jpg";
import apr from "../assets/images/hyp-apr-16.png";
import SkillSection from "../components/SkillSection";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import PictureDisplay from "../components/PictureDisplay";
const portfolioList = [
  {
    title: "UI Design",
    subtitle: "",
    description: "",
    image: bijouScreenshot,
    alt: "Bijou2100 UI Settings",
  },
  {
    title: "Silkscreen Artwork Design",
    subtitle: "",
    description: "",
    image: apr,
    alt: "Hyperion APR-16 Silkscreen artwork",
  },
  {
    title: "Package Design",
    subtitle: "",
    description: "",
    image: btPkg,
    alt: "Bullet Train HDMI Packaging",
  },
];
const Main = () => {
  const [pictureViewOpen, setPictureViewOpen] = useState(false);
  const handleOpen = () => {
    console.log("Click Detected");
    setPictureViewOpen(true);
  };
  return (
    <AnimatePresence mode={"wait"}>
      <div className="relative">
        <div className="h-[80px]"></div>
        <div className="py-2 md:px-12 px-6 text-left flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroBanner />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col gap-3"
          >
            <SkillSection />
            <div className="flex flex-col justify-evenly gap-3 lg:flex-row">
              {portfolioList.map((item: any, index: number) => (
                <Portfolio
                  index={index}
                  item={item}
                  key={index}
                  handleClick={handleOpen}
                />
              ))}
            </div>
          </motion.div>
        </div>
        {pictureViewOpen && (
          
            <PictureDisplay
              imageInfo={{ source: bijouScreenshot, alt: "bijou" }}
              handleClick={() => setPictureViewOpen(false)}
            />
          
        )}
        <footer className="h-20" />
      </div>
    </AnimatePresence>
  );
};

export default Main;
