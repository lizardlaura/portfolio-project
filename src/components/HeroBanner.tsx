
const HeroBanner = () => {
  return (
    
    <div className="w-full ring-1 rounded-sm h-auto text-left hero-banner">
      <div className="grid lg:grid-cols-2">
        <div className="py-5 pl-5">
        <h1 className="bebas-neue-regular pb-3">
          Frontend Developer
        </h1>
        <p className="noto-sans-arabic-md lg:pr-0 pr-3">
          Laura is a frontend developer specializing in intuitive, easy-to-navigate user interfaces for configuring complex residential and commercial AV systems. She combines strong technical expertise with a multidisciplinary background that includes graphic design, low-voltage electrical repair, and animatronic restoration, bringing creativity, precision, and problem-solving to every project.
        </p>  
        </div>
        <img
        className="h-[220px] -scale-x-100 ml-auto mr-auto" 
        src="https://www.publicdomainpictures.net/pictures/190000/nahled/business-woman-pointing-1470490477O2v.jpg" />
        {/* <div className="bg-blue-800/50 w-full h-full grid place-content-center text-white">
          Placeholder
        </div> */}
      </div>
      </div>
    
  )
}

export default HeroBanner