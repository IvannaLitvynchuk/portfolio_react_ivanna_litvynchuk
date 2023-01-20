import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="nav">
            <button className="hamburger" id="nav_toggle" type="button">
                <span className="hamburger__item">Menu</span>
            </button>
            <div className="nav-links">
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