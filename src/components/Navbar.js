import React from 'react'
import './Navbar.css'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'



function Navbar() {
    return (
        <>
        
           <div className="top">
               
            <div className="head">
             <FaIcons.FaBars/>
            </div>
            <div className="navbar">
            <GrIcons.GrNotification/>
             </div>
             
           </div>
            
        </>
    )
}

export default Navbar
