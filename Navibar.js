import React,{useState} from 'react';
import './Navbar.css';
import {Link, Outlet} from "react-router-dom";
//import './Logform.js';
function Navibar(){
    const[active,setActive]=useState("nav_menu");
    const[toggleIcon,setToggleIcon]=useState("nav_toggler");
    const navToggle=()=>{
        active==="nav_menu"?setActive('nav_menu nav_active'):setActive("nav_menu")
        toggleIcon==='nav_toggler'?setToggleIcon('nav_toggler toggle'):setToggleIcon('nav_toggler');
     };
    return(
        <>
            <nav className="nav">
                <a href="#" className="nav_brand">Guest Room Application </a>
                <ul className={active}>
                    <li className='nav_item'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to={"/Services"}>Services</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to={"/Login"}>Login</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to={"/Images"}>Images</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to={"/AvailableDates"}>AvailableDates</Link>
                    </li>
                </ul>
                <div onClick={navToggle}className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='Line5'></div>
                </div>
            </nav>
            <Outlet/>
        </>
            
    );
}
export default Navibar;

         