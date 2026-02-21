import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { motion } from "motion/react";

const languageItems = [
  "HTML",
  "CSS",
  "JavaSript",
  "TypeScript",
  "Python",
  "GO",
];

const devItems = ["React", "Vue", "Next.js", "Vite", "Node.js", "Flutter"];
const projectItems = ["Git", "Jira", "Bitbucket"];
const designItems = [
  "Figma",
  "Adobe XD",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Affinity",
];
const videoItems = ["Adobe Premiere Pro", "DaVinci Resolve"];
const hardwareItems = ["Soldering", "Arduino", "ESP32"];

const SkillSection = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const animate = {
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };
  const skillList = [
    { title: "Languages", skills: languageItems },
    { title: "Development", skills: devItems },

    { title: "Project Management", skills: projectItems },
    { title: "Design", skills: designItems },
    { title: "Video Editing", skills: videoItems },
    { title: "Hardware", skills: hardwareItems },
  ];
  return (
    <div
      className={`w-full grid ${isCollapsed ? "max-h-[158px]" : "max-h-[800px]"} transition-all duration-500`}
    >
      <div className="w-full relative grid">
        <span className="chosen-font text-center text-xl border-b-[1px] p-2 mb-1 border-b-white/10">
          Skills
        </span>
        <button
          className="absolute top-2 p-0 bg-transparent"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          <ChevronDown
            className={`${isCollapsed && "-rotate-90"} transition-transform duration-300`}
          />
        </button>
      </div>

      {isCollapsed ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap gap-2 items-center justify-center pb-3"
        >
          {languageItems.map((item) => (
            <span className="p-[0.6em]">{item}</span>
          ))}
          <button className="p-[0.6em]" onClick={() => setIsCollapsed(false)}>
            ... more
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap flex-col gap-2 items-center justify-center pb-3"
        >
          {skillList.map((listItem) => (
            <>
              <span className="text-center font-bold">{listItem.title}</span>
              <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
                {listItem.skills.map((item) => (
                  <span className="px-2 py-1 cursor-default hover:bg-white/80 hover:text-[#222222] hover:font-semibold transition-all duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </>
          ))}
        </motion.div>
      )}

      {/* <span className='text-center font-bold'>Languages</span>
      <div className='flex gap-2 items-center justify-center'>
        {languageItems.map((item)=>
        <span className='p-2'>
          {item}
        </span>
        )}
      </div> */}
    </div>
  );
};

export default SkillSection;
