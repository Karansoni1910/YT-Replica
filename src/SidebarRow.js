import React from 'react'
import "./SidebarRow.css"

export default function SidebarRow({ selected,Icon, title }) {
    return (
        <div className={`sidebarrow ${selected && 'selected'}`}>
            <Icon className="sbr-icon"/>
            <div className="title">{title}</div> 
        </div>
    )
}
