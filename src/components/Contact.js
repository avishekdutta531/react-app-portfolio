import React from 'react'
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagramSquare, FaBehanceSquare} from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="contactSection">
                    <img src="https://themebing.com/html/amike/assets/images/logo.png" alt="logo" />
                    <div className="row justifyCentre">
                        <p className="contact__details">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="contactCircle">
                            <ul>
                                <li>
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href=""><FaTwitter /></a>
                                </li>
                                <li>
                                    <a href=""><FaPinterest /></a>
                                </li>
                                <li>
                                    <a href=""><FaInstagramSquare /></a>
                                </li>
                                <li>
                                    <a href=""><FaBehanceSquare /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
