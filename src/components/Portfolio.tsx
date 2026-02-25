

interface PortfolioType {
  index: number;
  item: { title: string; subtitle: string; description: string; image:string, alt:string };
  handleClick: (index:number)=>void
}
const Portfolio = ({ index, item, handleClick }: PortfolioType) => {
  return (
    <div
      key={index+'-'+item.title}
      className={` max-w-full lg:w-[35%] w-[80%] self-center rounded-lg portfolio-item z-10 grid  hover:scale-[1.01] transition-transform duration-300`}
      onClick={()=>handleClick(index)}
    >
      <div className="flex flex-col self-center p-4">
        <span className="text-2xl bebas-neue-regular">
          {item.title}
        </span>
      </div>

      {item.image !== "" && 
       <div className="justify-self-center image-container min-h-[300px] min-w-full">
        <img src={item.image} alt={item.alt} className="rounded-b-lg"/>
      </div>
      }
     
    </div>
  );
};

export default Portfolio;
