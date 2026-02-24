import { X } from "lucide-react";
import { motion } from "motion/react";
interface ImageInfo {
  imageInfo: {
    source: string;
    alt: string;
  };
  handleClick: () => void;
}
const PictureDisplay = ({ imageInfo, handleClick }: ImageInfo) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 0.5}}
      className="fixed top-0 left-0 bg-black/50 h-[100vh] w-[100vw] z-[90]"
      onClick={handleClick}
    >
      <button
        className="absolute top-4 right-4 flex gap-2 bg-black text-white"
        title="close"
        onClick={handleClick}
      >
        <span>Close </span>
        <X />
      </button>
      <img
        className="absolute max-h-[80vh] max-w-[80vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={imageInfo.source}
        alt={imageInfo.alt}
      />
    </motion.div>
  );
};

export default PictureDisplay;
