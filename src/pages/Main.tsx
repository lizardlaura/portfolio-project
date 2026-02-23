// import portfolio from '.././assets/portfolio.json'
import HeroBanner from "../components/HeroBanner";
import Portfolio from "../components/Portfolio";
import bijouScreenshot from "../assets/images/bijou_mobile.png";
import btPkg from "../assets/images/bullet_trainpkg.jpg";
import apr from "../assets/images/hyp-apr-16.png";
import SkillSection from "../components/SkillSection";

import { AnimatePresence, motion } from "motion/react";
const portfolioList = [
  {
    title: "UI Design",
    subtitle: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
    image: bijouScreenshot,
    alt: "Bijou2100 UI Settings"
  },
  {
    title: "Silkscreen Artwork Design",
    subtitle: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
    image: apr,
    alt: "Hyperion APR-16 Silkscreen artwork"
  },
  {
    title: "Package Design",
    subtitle: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
    image: btPkg,
    alt: "Bullet Train HDMI Packaging"

  },
];
const Main = () => {
  return (
    <AnimatePresence mode={"wait"}>
      <div>
        <div className="h-[80px]"></div>
        <div className="py-2 md:px-12 px-6 text-left flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x:-10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroBanner />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x:10 }}
            animate={{ opacity: 1, x:0}}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col gap-3"
          >
            <SkillSection />
            {portfolioList.map((item: any, index: number) => (
              <Portfolio index={index} item={item} key={index} />
            ))}
          </motion.div>
        </div>
        <footer className="h-20" />
      </div>
    </AnimatePresence>
  );
};

export default Main;
