import React from "react";
import {navigation} from "./data";



export const SideBar = () =>{
    
    const teste = () =>{
        navigation.map(list =>{
            console.log(list.icon);
        })
    }
    return(
    <header >
        <h1>Instagram</h1>
        <ul>
            {navigation.map(navInfo =>{
                return(
                <li onMouseOver={() =>{teste()}} key={navInfo.id}>
                    <img src={navInfo.img} style={{width:10}} alt="" />
                    <span className="sidebar-icon" >{navInfo.icon}</span>
                    <span className="sidebar-name">{navInfo.name}</span>
                    
                </li>
                )
            })}
        </ul>

    </header>
    )
}

