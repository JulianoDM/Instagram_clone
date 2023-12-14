import React from "react";
import {navigation} from "./data";



export const SideBar = () =>{
    
    
    return(
    <header >
        <h1>Instagram</h1>
        <ul>
            {navigation.map(navInfo =>{
                return(
                <li  key={navInfo.id}>
                    <img src={navInfo.img}  alt="" />
                    <span className="sidebar-icon" >{navInfo.icon}</span>
                    <span className="sidebar-name">{navInfo.name}</span>
                    
                </li>
                )
            })}
        </ul>

    </header>
    )
}

