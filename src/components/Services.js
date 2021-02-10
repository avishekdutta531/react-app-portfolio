import React from 'react'
import {FaGithub, FaCamera, FaInbox, FaApple, FaFileVideo, FaSearchPlus} from 'react-icons/fa';

const Services = () => {
        const [header] = React.useState({
            mainHeader: "SERVICES",
            subHeading: "My Services",
            text: "Occaecat eiusmod exercitation reprehenderit enim aliqua laborum incididunt velit ea laboris ex.",
        })
    return (
        <div id="services" className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainheader">{header.subHeading}</h1>
                        <p className="maincontent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    
                    <div className="row bgMain">
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaCamera className="commonIcons" />
                                <div className="services__box-header">
                                    Photography
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaInbox className="commonIcons" />
                                <div className="services__box-header">
                                    Web Design
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaApple className="commonIcons" />
                                <div className="services__box-header">
                                    App Development
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaFileVideo className="commonIcons" />
                                <div className="services__box-header">
                                    Video Editing
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaSearchPlus className="commonIcons" />
                                <div className="services__box-header">
                                    SEO Expert
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
