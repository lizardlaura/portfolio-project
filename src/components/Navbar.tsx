import { FlaskConical, House, Mail } from "lucide-react"
// import HalftoneEffect from "./HalftoneEffect"
const svgStyle={boxShadow:'0 0 3px white'}
const routes = [
  {path:'/', name: 'Main', icon: <House style={svgStyle}/>},
  {path:'/contact', name:'Contact', icon: <Mail />},
  {path:'/personal-projects', name:"Personal Projects", icon: <FlaskConical />},
]

const username = "Laura Saidi"

const Navbar = ({path}:{path:any}) => {
  return (
    <div className="relative w-full">
      {/* <div className="fixed nav-shadow" /> */}
      <div className="navbar-container">
      <div className="navbar chosen-font relative z-20 min-w-0 gap-0">
        <div className="text-2xl text-left chosen-font min-w-0">
            {username}
        </div>
        <div className="flex justify-end text-xl min-w-0">
          {routes.map((route, index)=>
            <nav key={index} className={`p-2 ${index !== routes.length-1 && "right-border"} ${route.path===path ? "white-shade opacity-100" : "opacity-70"}`}>
              {route.icon}
            </nav>          
          )}
            
        </div>
    </div>
      </div>
    
    </div>
  )
}

export default Navbar