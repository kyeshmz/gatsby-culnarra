import React from 'react'
import {Link} from 'gatsby'
import Logo from './Logo'



export const Header = () =>{
   return(
      <header>
         <nav>
         <div className="nav-item"><Link to='/'>Cultural Narrative of a City</Link></div>
         <div className="nav-item"><Link to='/card'>Card</Link></div>
         <div className="nav-item"><Link to='/project'>Project</Link></div>
         <div className="nav-item"><Link to='/note'>Note</Link></div>
         <div className="nav-item"><Link to='/event'>Event</Link></div>
         <div className="nav-item"><Link to='/about'>About</Link></div>
         <div className="nav-item"><Link to='/'>English</Link> / <Link to='/'>Japanese</Link></div>
         </nav>
         <div className="header-logo"><Logo></Logo></div>
         <style jsx>{`
            @use "include-media";

            .header-logo {
               max-width: 432px;
               margin-left: auto;
               margin-right: auto;
               text-align:center;
            }
            `}
         </style>
      </header>
   )
}

export default Header;