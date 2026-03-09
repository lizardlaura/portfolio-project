import disco from "../../assets/images/partyplan/disco.avif";
import balloons from "../../assets/images/partyplan/balloons.avif";
import event from "../../assets/images/partyplan/event.avif";
import { useState } from "react";
const PartyHero = () => {
  const [activeImg, setActiveImg] = useState(0); //0 | 1 | 2
  const imageDetails = [
    { source: disco, alt: "disco balls", title: "Theme Parties" },
    {
      source: balloons,
      alt: "balloons floating against ceiling",
      title: "Birthdays",
    },
    {
      source: event,
      alt: "people raising champagne glasses at dinner party",
      title: "Events",
    },
  ];
  return (
    <div className="party-hero-container">
      {imageDetails.map((img, index) => (
        <div
          className={`${activeImg === index ? "md:max-w-[60vw] max-w-[100vw]" : "md:max-w-[20vw] max-w-[100vw]"} bg-green-500 overflow-hidden relative transition-all duration-500`}
          onMouseEnter={() => setActiveImg(index)}
        >
          <img
            src={img.source}
            alt={img.alt}
            className="w-auto object-cover h-[75vh]"
          />
          <div
            className={`${activeImg === index ? "opacity-0" : "md:opacity-100"} opacity-0 ${index === 0 ? "bg-orange-600" : index === 1 ? "bg-green-600" : "bg-purple-600"} h-full w-full absolute top-0 left-0 transition-opacity duration-500`}
          />
          <div className="absolute bottom-2 right-2 text-2xl p-2">
            <span
              style={{
                textShadow: "0 0 3px rgb(0, 0, 0), 0 0 3px rgb(0, 0, 0)",
              }}
            >
              {img.title}
            </span>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default PartyHero;
