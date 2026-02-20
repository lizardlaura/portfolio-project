import portfolio from '.././assets/portfolio.json'
import HeroBanner from '../components/HeroBanner'
import Portfolio from '../components/Portfolio'

const Main = () => {
  return (
    <div>
        <div className="h-[100px]"></div>
        <div className="py-2 md:px-12 px-6 text-left flex flex-col gap-3">
            <HeroBanner />
            {portfolio.map((item:any, index:number)=>(
               <Portfolio index={index} item={item} key={index} />
            ))}
        </div>
        <footer className='h-20' />
    </div>
  )
}

export default Main