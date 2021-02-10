import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <a href="#header">
                                <img src="https://themebing.com/html/amike/assets/images/logo.png" alt="logo"/>
                            </a>
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li>
                            <a href="#header" className="navbar__items">Home</a>
                        </li>
                        <li>
                            <a href="#services" className="navbar__items">Services</a>
                        </li>
                        <li>
                            <a href="#about" className="navbar__items">About</a>
                        </li>
                        <li>
                            <a href="#about" className="navbar__items">Skills</a>
                        </li>
                        <li>
                            <a href="#prices" className="navbar__items">Portfolio</a>
                        </li>
                        <li>
                            <a href="#prices" className="navbar__items">Blog</a>
                        </li>
                        <li>
                            <a href="#contact" className="navbar__items">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
