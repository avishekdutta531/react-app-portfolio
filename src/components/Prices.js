import React from 'react'

const Prices = () => {
    return (
        <div id="prices" className="prices">
            <div className="container">
                <div className="common">
                    <h3 className="heading">CHOOSE A PLAN</h3>
                    <h1 className="mainheader">Pricing Plan</h1>
                    <p className="maincontent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="priceHeading">Basic</div>
                            <div className="price__rs">
                                <span>$</span>50
                            </div>
                            <ul>
                                <li>5GB Storage Space</li>
                                <li>20GB Monthly Bandwidth</li>
                                <li>My SQL Databases</li>
                                <li>100 Email Account</li>
                                <li>10 Free Domain Names</li>
                            </ul>
                            <div className="price__btn">
                                <a href="" className="btn btn-outline">
                                    Purchase
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="standard__price">
                            <div className="price">
                                <div className="priceHeading">Standard</div>
                                <div className="price__rs">
                                    <span>$</span>80
                                </div>
                                <ul>
                                    <li>5GB Storage Space</li>
                                    <li>20GB Monthly Bandwidth</li>
                                    <li>My SQL Databases</li>
                                    <li>100 Email Account</li>
                                    <li>10 Free Domain Names</li>
                                </ul>
                                <div className="price__btn">
                                    <a href="" className="btn price-btn-outline">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="priceHeading">Premium</div>
                            <div className="price__rs">
                                <span>$</span>160
                            </div>
                            <ul>
                                <li>5GB Storage Space</li>
                                <li>20GB Monthly Bandwidth</li>
                                <li>My SQL Databases</li>
                                <li>100 Email Account</li>
                                <li>10 Free Domain Names</li>
                            </ul>
                            <div className="price__btn">
                                <a href="" className="btn btn-outline">
                                    Purchase
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
