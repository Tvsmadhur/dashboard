import React from 'react'
import * as GrIcons from 'react-icons/gr'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as VscIcons from 'react-icons/vsc'

export const SidebarData=[
    {
        title:'Dashboard',
        icon:<MdIcons.MdDashboard/>,
        cName:'nav-text'
    },
    {
        title:'Calender',
        icon:<BsIcons.BsCalendar/>,
        cName:'nav-text'
    },
    {
        title:'Work Order',
        icon:<GrIcons.GrNotes/>,
        cName:'nav-text'
    },
    {
        title:'Assets',
        icon:<GiIcons.GiGears/>,
        cName:'nav-text'
    },
    {
        title:'Spares',
        icon:<FaIcons.FaBoxes/>,
        cName:'nav-text'
    },
    {
        title:'Settings',
        icon:<VscIcons.VscSettingsGear/>,
        cName:'nav-text'
    }
]
