import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.css'
function Navbar () {
    return (
        <div class="navbar-flex">
            <NavLink end to="/" class="navbar-hover-effect">HOME</NavLink>
            <div class="navbar-hover-effect"> TOURS </div>
            <div class="navbar-hover-effect"> ABOUT </div> 
            <div class="navbar-hover-effect"> HELP </div>
        </div>
    )
}
export default Navbar;
