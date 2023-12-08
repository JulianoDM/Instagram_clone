import React from "react";
import { SideBar } from "../components/SideBar";
import { Photos } from "../components/Photos";




export const App = () =>{
    return(
        <div id="app">
            <SideBar/>
            <div className="line"></div>
            <Photos/>
        </div>
    )
};

