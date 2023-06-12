import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'


function NavBar() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },{
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },{
      name: "Settings",
      path: "/settings",
      icon: faCog
    },
  ]  
  
    function closeSidebar(){
      setShowSidebar(!showSidebar)
    }
  
  return (
    <>
      
    <div className='navbar container'>
        <a className='logo' href='/'>Iya<span>U</span>Soup</a>
        <div className='nav-links'>
          {
            links.map(link=>(
              <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
            ))
          }
        </div>
        <div onClick={() => setShowSidebar(closeSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className='bar'> </div>
          <div className='bar'> </div>
          <div className='bar'> </div>
        </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  )
}

export default NavBar