import { useState, useEffect } from "react";

// const useWindowDimensions = () => {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// };
const HalftoneEffect = () => {
  //create an array of window sisze
  const [psuedoArray, setPsuedoArray] = useState(Array(20).fill(1))
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth,);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    const w = windowDimensions
    setPsuedoArray(Array(w).fill(1))
  },[windowDimensions])

  return (
    <div className="fixed -top-2 -left-4 flex flex-col gap-2 overflow-x-hidden -z-10"
    >
      <div className="flex gap-4">
        {psuedoArray.map(()=>
          <div className="h-5 w-5 rounded-full bg-red-800/50"></div>
        )}
      </div>
      <div className="ml-2 flex justify-between gap-4">
        {psuedoArray.map(()=>
          <div className="h-4 w-4 rounded-full bg-red-800/40"></div>
        )}
      </div>
      <div className="ml-4 flex justify-between gap-4">
        {psuedoArray.map(()=>
          <div className="h-3 w-3 rounded-full bg-red-800/30"></div>
        )}
      </div>
      <div className="ml-6 flex justify-between gap-4">
        {psuedoArray.map(()=>
          <div className="h-2 w-2 rounded-full bg-red-800/20"></div>
        )}
      </div>     
      <div className="ml-8 flex justify-between gap-4">
        {psuedoArray.map(()=>
          <div className="h-1 w-1 rounded-full bg-red-800/10"></div>
        )}
      </div>    

    </div>
  )
}

export default HalftoneEffect