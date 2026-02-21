import { useState } from "react"

const DevWarning = () => {
  const [isVisible,setIsVisible] = useState(true)
  const [isOpaque, setIsOpaque] = useState(true)
  const handleHide = () =>{
    setIsOpaque(false)
    setTimeout(()=>setIsVisible(false), 500)
  } 
  if(!isVisible) return (<></>)
  return (
    <div className={`absolute text-white p-4 shadow-black/30 shadow-md z-[999] top-2 bg-neutral-500 rounded-md left-[50%] translate-x-[-50%] flex flex-col items-center gap-2 ${isOpaque ? 'opacity-100':'opacity-0'} transition-opacity duration-500`}>
      
      <span className="text-2xl">Development Version</span>
      <span className=" text-lg max-w-[80vw] text-center">If you're reading this, the page is still in development! Check back later for updates.</span>
      <button 
        className="mt-2 border-2 border-[#441752] bg-[#441752]/50 hover:bg-black/50 hover:font-bold transition-all"
        onClick={handleHide}>
        OK
      </button>
    </div>
  )
}

export default DevWarning