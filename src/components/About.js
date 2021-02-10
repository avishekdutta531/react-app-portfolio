import React from 'react'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="about__header">
                    <div className="common">
                        <h1 className="mainheader">About Me</h1>
                        <p className="maincontent">Occaecat eiusmod exercitation reprehenderit enim aliqua laborum incididunt velit ea laboris ex.</p>
                        <div className="commonBorder"></div>
                    </div>
                </div>
                <div className="row h-650 alignCentre">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="https://themebing.com/html/amike/assets/images/me-01-alt.png" alt="man-01-alt" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
                            </div>
                            <div className="about__info-p2">
                                nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Name:</strong>
                                        <p>Jonathan Doe</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>Email:</strong>
                                        <p>example@domain.com</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>Phone:</strong>
                                        <p>+1 023 454 345</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>LinkedIn:</strong>
                                        <p>Jonathan_123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
