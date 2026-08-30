import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router';
import Toggle from './Toggle';
import LanguageSwitcher from './LanguageSwitcher';


function Navbar() {
    const [click, setClick] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const {i18n, t} = useTranslation(["common"]);
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2){
            i18n.changeLanguage("en");
        }
    });

        function scrollHandler() {
            if (window.scrollY >= 20) {
              updateNavbar(true);
            } else {
              updateNavbar(false);
            }
    }
    
    window.addEventListener("scroll", scrollHandler);

    
    return (
        <>
        <nav className={navColour ? "navbar sticky" : "navbar"}>
          <div className='navbar-container' >
             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 OSNOFAZ 
             </Link> 
             <div className='menu-icon' onClick={handleClick} >
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                 <li className='nav-item'>
                     <NavLink to='/' end className='nav-links' onClick={closeMobileMenu}>
                         {t("homenav")}
                     </NavLink>
                 </li>
                 <li className='nav-item'>
                     <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                     {t("aboutmenav")}
                     </NavLink>
                 </li>
                 <li className='nav-item'>
                     <NavLink to='/resume' className='nav-links' onClick={closeMobileMenu}>
                     {t("resumenav")}
                     </NavLink>
                 </li>
                 <li className='nav-item'>
                     <NavLink to='/projects' className='nav-links' onClick={closeMobileMenu}>
                     {t("projectsnav")}
                     </NavLink>
                 </li>
                 <li className='nav-item'>
                     <NavLink to='/stream' className='nav-links' onClick={closeMobileMenu}>
                         STREAM
                     </NavLink>
                 </li>
                 <li className='nav-item'>
                     <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                     {t("contactnav")}
                     </NavLink>
                 </li>
                    <li className='nav-item'>
                    <Toggle/>
                </li>
                <li className='nav-item'>
                    <LanguageSwitcher />
                </li>
             </ul>
          </div>   
        </nav>
        </>
    )
}

export default Navbar
