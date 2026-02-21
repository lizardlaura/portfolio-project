// import portfolio from '.././assets/portfolio.json'
import HeroBanner from '../components/HeroBanner'
import Portfolio from '../components/Portfolio'
import bijouScreenshot from '../assets/images/bijou_mobile.png'
import btPkg from '../assets/images/bullet_trainpkg.jpg'
import apr from '../assets/images/hyp-apr-16.webp'
const portfolioList = [
    {
        title:"UI Design",
        subtitle: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
        image: bijouScreenshot
    },
    {
        title:"Silkscreen Artwork Design",
        subtitle: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
        image: apr

        
    },
     {
        title:"Package Design",
        subtitle: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus imperdiet massa facilisis dignissim. Integer at metus interdum ipsum posuere lacinia. In convallis quis tellus a vestibulum. Aliquam erat volutpat. Cras porttitor diam nec dapibus porttitor. Aenean auctor odio sed ornare facilisis. Cras luctus pretium facilisis. Nunc viverra velit at quam dignissim lacinia.",
        image: btPkg
    },

]
const Main = () => {
  return (
    <div>
        <div className="h-[80px]"></div>
        <div className="py-2 md:px-12 px-6 text-left flex flex-col gap-3">
            <HeroBanner />
            {portfolioList.map((item:any, index:number)=>(
               <Portfolio index={index} item={item} key={index} />
            ))}
        </div>
        <footer className='h-20' />
    </div>
  )
}

export default Main