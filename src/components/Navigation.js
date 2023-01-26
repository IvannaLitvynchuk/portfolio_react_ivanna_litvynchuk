import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    const [activeClass, setActiveClass] = useState(false)
    const activeHamburger = activeClass ? "hamburger active" : "hamburger"
    const activeNavLinks = activeClass ? "nav-links active" : "nav-links"

    const navToggle = () => {
        setActiveClass(!activeClass)
    }

    return (
        <nav className="nav">
            <button className={activeHamburger} id="nav_toggle" type="button" onClick={navToggle}>
                <span className="hamburger__item">Menu</span>
            </button>
            <div className={activeNavLinks}>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}