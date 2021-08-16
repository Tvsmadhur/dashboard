import {SidebarData} from './SidebarData.js';
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="nav-menu">
            <ul>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                }
                )

                }
            </ul>
        </div>
    )
}

export default Sidebar
