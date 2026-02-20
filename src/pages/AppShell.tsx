import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppShellContent =()=>{
    const location = useLocation()
    return(
        <div>
        <Navbar path={location} />
        <Outlet />
        </div>
    )
}

const AppShell = () => {
  return (
    <>
    <AppShellContent />
    </>
  )
}

export default AppShell