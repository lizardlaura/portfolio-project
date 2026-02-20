import { FlaskConical, House, Mail } from "lucide-react"
const svgStyle={boxShadow:'0 0 3px white'}
const routes = [
  {path:'/', name: 'Main', icon: <House style={svgStyle}/>},
  {path:'/contact', name:'Contact', icon: <Mail />},
  {path:'/personal-projects', name:"Personal Projects", icon: <FlaskConical />},
]

const Navbar = ({path}:{path:any}) => {
  return (
    <div className="relative">
      <div className="fixed nav-shadow" />
    <div className="navbar bebas-neue-regular relative z-20">
      {/* <svg viewBox="0 0 2000 50" xmlns='http://www.w3.org/2000/svg' className="absolute nav-shadow">
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='5' 
      stitchTiles='stitch' />
  </filter>

  <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg> */}
        <div className="text-[2.5rem] text-left w-full">
            Laura Saidi
        </div>
        <div className="flex justify-end w-full text-xl">
          {routes.map((route, index)=>
            <nav key={index} className={`p-2 ${index !== routes.length-1 && "right-border"} ${route.path===path ? "white-shade opacity-100" : "opacity-70"}`}>
              {route.icon}
            </nav>          
          )}
            
        </div>
    </div>
    </div>
  )
}

export default Navbar