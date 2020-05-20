import React from 'react'
import {Link} from 'gatsby'

export const Nav = () =>{
   return(
      <nav>
         <Link to='/card'>Card</Link>
         <Link to='/project'>Project</Link>
         <Link to='/note'>Note</Link>
         <Link to='/event'>Event</Link>
         <Link to='/about'>About</Link>
         <style jsx>{`
            `}
         </style>
      </nav>
   )
}
export default Nav;