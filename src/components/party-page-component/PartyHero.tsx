import disco from "../../assets/images/partyplan/disco.avif";
import balloons from "../../assets/images/partyplan/balloons.avif";
import event from '../../assets/images/partyplan/event.avif'
import { useState } from "react";
const PartyHero = () => {

  const [activeImg, setActiveImg] = useState(0) //0 | 1 | 2

  return (
    <div className="max-h-[75vh] flex gap-0 justify-center text-white">
      <div className={`${activeImg===0?'max-w-[60vw]' : 'max-w-[20vw]'} overflow-hidden relative transition-all duration-500`} onMouseEnter={()=>setActiveImg(0)}>
        
        <img
        src={disco}
        alt="Disco balls"
        className="w-auto h-full object-cover max-h-[75vh]"
      />
      <div className={`${activeImg === 0 ? 'opacity-0':'opacity-100'} bg-orange-600 h-full w-full absolute top-0 left-0 transition-opacity duration-500`} />
      <div className="absolute bottom-2 right-2 text-2xl p-2">
          <span style={{textShadow: '0 0 3px rgb(0, 0, 0), 0 0 3px rgb(0, 0, 0)'}}>
          Theme Parties
          </span>
        </div>
      </div>
      
      <div className={`${activeImg===1?'max-w-[60vw]' : 'max-w-[20vw]'} overflow-hidden relative transition-all duration-500 `} onMouseEnter={()=>setActiveImg(1)}>
        
        <img
          src={balloons}
          alt="balloons floating against ceiling"
          className="w-auto h-[75vh] object-cover"
        />
        <div className={`${activeImg === 1 ? 'opacity-0':'opacity-100'} bg-green-600 h-full w-full absolute top-0 left-0 transition-opacity duration-500`} />
        <div className="absolute bottom-2 right-2 text-2xl p-2">
          <span style={{textShadow: '0 0 3px rgb(0, 0, 0), 0 0 3px rgb(0, 0, 0)'}}>
          Birthdays
          </span>
        </div>
      </div>
       <div className={`${activeImg===2?'max-w-[60vw]' : 'max-w-[20vw]'} overflow-hidden relative transition-all duration-500`}>
        
        <img
          src={event}
          alt="people raising up champagne glasses at dinner party"
          className="w-auto h-[75vh] object-cover"
        />
        <div className={`${activeImg === 2 ? 'opacity-0':'opacity-100'} bg-purple-600 h-full w-full absolute top-0 left-0 transition-opacity duration-500`} onMouseEnter={()=>setActiveImg(2)}/>
        <div className="absolute bottom-2 right-2 text-2xl p-2">
          <span style={{textShadow: '0 0 3px rgb(0, 0, 0), 0 0 3px rgb(0, 0, 0)'}}>
          Special Events
          </span>
        </div>
      </div>
    </div>
  );
};

export default PartyHero;
