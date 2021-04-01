import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import '../style/Navbar.css'

const Navbar = () => {
    
    const [isMenu, setIsMenu] = useState(false)

    const handleClick = () => {
        setIsMenu(!isMenu)
    }
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <div className="navbar__logo--name"><div className="square"></div>Kieu Dac</div>
                    <div className="navbar__logo--position"><span>/</span> FRONT-END DEVELOPER</div>
                </div>
                <ul className={isMenu ? 'navbar__menu active' : 'navbar__menu'}>
                    <li className="navbar__item">
                        <NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--active" onClick={handleClick}>About me</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/resume" className="navbar__link" activeClassName="navbar__link--active" onClick={handleClick}>Resume</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/project" className="navbar__link" activeClassName="navbar__link--active" onClick={handleClick}>Projects</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/contact" className="navbar__link" activeClassName="navbar__link--active" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
                <div className='navbar__icon' onClick={handleClick}>
                    {isMenu ? <FaTimes /> :  <FaBars />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;