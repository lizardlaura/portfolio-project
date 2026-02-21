import hero from "../assets/images/hero_image.jpg";
const HeroBanner = () => {
  return (
    <div className="w-80vw rounded-sm h-auto text-left hero-banner pb-4">
      <div className="grid lg:grid-cols-2 justify-center items-center">
        <div className="py-5 pl-5 flex flex-col items-center gap-3">
          <h1 className="chosen-font  text-center">Laura Saidi</h1>
          <div className="image-cropper">
            <img className="" src={hero} />
          </div>
          <span className="chosen-font text-2xl">
            Frontend Developer
          </span>
            
          
          
        </div>
        <div>
          <p className="md:text-2xl text-lg">
            Laura is a frontend developer specializing in intuitive,
            easy-to-navigate user interfaces for configuring complex residential
            and commercial AV systems. She combines strong technical expertise
            with a multidisciplinary background that includes graphic design,
            low-voltage electrical repair, and animatronic restoration, bringing
            creativity, precision, and problem-solving to every project.
          </p>
        </div>

        {/* <div className="bg-blue-800/50 w-full h-full grid place-content-center text-white">
          Placeholder
        </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
