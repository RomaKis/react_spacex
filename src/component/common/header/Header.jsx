import React, {useRef, useEffect} from "react";
import { Navbar, Actions } from '../../common';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.svg'
import topImage from '../../../assets/images/img-main-top.png'
import style from './Header.css'
import backgroundImageMain from '../../../assets/images/img-main-top.png'
import backgroundImageSecond from '../../../assets/images/spaceman.png'


function Header() {
  
  
  let text = '';
if (useLocation().pathname === "/") {
  text = "<div class='first-header-text'><div class='first-header-text-small'>THE SPACE IS WAITING FOR</div><div class='first-header-text-bold'>YOU</div></div>"
}else {
  text = "<div class='second-header-text'>FAVOURITES</div>"
}
  return (
    <div class="main" style={{
      backgroundImage: useLocation().pathname === "/" ? `url(${backgroundImageMain})` : `url(${backgroundImageSecond})`
    }} >
      <div class="header">
        <div class="logo">
          <NavLink end to="/"><img src={logoImage} alt="logo" /></NavLink>
        </div>
        <div class="navbar">
          <Navbar />
        </div>
        <div class="actions">
          <Actions />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: text}}></div>
     
      
      
    </div>
  )
}

export default Header;
