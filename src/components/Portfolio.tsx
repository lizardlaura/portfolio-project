

interface Portfolio {
  index: number;
  item: { title: string; subtitle: string; description: string; image:string };
}
const Portfolio = ({ index, item }: Portfolio) => {
  return (
    <div
      key={index}
      className={` max-w-full self-center rounded-lg portfolio-item z-10 grid md:grid-cols-2 hover:scale-[1.01] transition-transform duration-300`}
    >
      <div className="flex flex-col self-center p-4">
        <span className="text-2xl bebas-neue-regular">
          {item.title}
        </span>
        {item.subtitle !== "" && (
          <span className="text-sm text-neutral-600 italic">
            {item.subtitle}
          </span>
        )}
        {/* <span className="">{item.description}</span> */}
      </div>

      {item.image != "" && 
       <div className="justify-self-center image-container min-h-[300px] min-w-full">
        <img src={item.image} className="md:rounded-r-lg md:rounded-b-none rounded-b-lg"/>
      </div>
      }
     
    </div>
  );
};

export default Portfolio;
