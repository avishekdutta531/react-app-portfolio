import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagramSquare, FaBehanceSquare, FaPlay} from 'react-icons/fa';

const Banner = () => {
        const [state] = React.useState({
            title: 'I am Jonathan Doe', 
            text: 'i,m Jonathan, professional web developer with long time experience in this field',
            image: 'https://themebing.com/html/amike/assets/images/man-01.png'
        });
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <a href="" className="header__social-icons">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="header__social-icons">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="header__social-icons">
                                            <FaPinterest />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="header__social-icons">
                                            <FaInstagramSquare />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="header__social-icons">
                                            <FaBehanceSquare />
                                        </a>
                                    </li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}​</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn btn-smart">
                                        <FaPlay className="play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.image} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
