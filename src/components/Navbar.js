import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import Toggle from './Toggle'
import {useTranslation} from "react-i18next";
import i18next from "i18next";


function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const {i18n, t} = useTranslation(["common"]);
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2){
            i18next.changeLanguage("en");
        }
    });

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    
    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container' >
             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 OSNOFAZ 
             </Link> 
             <div className='menu-icon' onClick={handleClick} >
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                 <li className='nav-item'>
                     <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                         {t("homenav")}
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
                     {t("aboutmenav")}
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to ='/projects' className='nav-links' onClick={closeMobileMenu}>
                     {t("projectsnav")}
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to ='/stream' className='nav-links' onClick={closeMobileMenu}>
                         STREAM
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to ='/contact' className='nav-links' onClick={closeMobileMenu}>
                     {t("contactnav")}
                     </Link>
                 </li>
                    <li className='nav-item'>
                    <Toggle/>
                </li>
                <li className='nav-item'>
                    <select className='nav-linkz' value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
                        <option className='nav-linkz' value="en">EN</option>
                        <option className='nav-linkz' value="pt">PT</option>
                    </select>
                </li>
             </ul>
          </div>   
        </nav>
        </>
    )
}

export default Navbar
