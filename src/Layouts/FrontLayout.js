import * as React from "react";
import { Outlet } from 'react-router-dom';
import MiniDrawer from "./Sidebar";
import Sidebar from './Sidebar';
import Sidebardaa from "./Sidebardaa";
// import Footer from './Footer';

export default function Frontlayouts(props){
    console.log("props layout", props)
    return(
        <>
            {/* <Sidebar /> */}
            {/* <Sidebardaa/> */}
            <MiniDrawer/>
            <Outlet /> 
            {/* <Footer /> */}
        </> 
    );
}