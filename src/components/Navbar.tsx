// import { FlaskConical, House, Mail } from "lucide-react"
// import HalftoneEffect from "./HalftoneEffect"

import { Mail } from "lucide-react";

// const routes = [
//   {path:'/', name: 'Main', icon: <House />},
//   {path:'/contact', name:'Contact', icon: <Mail />},
//   {path:'/personal-projects', name:"Personal Projects", icon: <FlaskConical />},
// ]

const username = "Laura Saidi";

const Navbar = ({ path }: { path: string }) => {
  return (
    <div className="relative w-full">
      {path === "/shop-example" ? (
        <div className="w-full p-5 flex justify-between items-center border-b-white border-b-[1px] party-nav">
          <h1 className="party">
            Party Planning <span className="text-3xl">by</span> Kyana
          </h1>
          <div className="flex gap-2 items-center">
            <button title='contact' aria-label="Contact Me" className="party-nav-icon">
              <span>Contact</span>
              <Mail className="icon" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar-container">
            <div className="navbar chosen-font relative z-20 min-w-0 gap-0">
              <div className="text-2xl text-left chosen-font min-w-0">
                {username}
              </div>
            </div>
          </div>
        </>
      )}
      {/* <div className="fixed nav-shadow" /> */}
    </div>
  );
};

export default Navbar;
