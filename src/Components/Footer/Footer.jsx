import React from 'react'
import './Footer.css'
import logo from '../../Images/logo.png'
import call from '../../Images/call-i.png'
import email from '../../Images/email.png'
import location from '../../Images/pin.png'

function Footer() {
    return (
        <div className="footer-sec  ">
            <div className="container">
                <div className='row text-white footer-item'>

                    <div className="col">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel maxime inventore velit, <br />explicabo iste
                            similique cum delectus accusantium. Aliquam?</p>
                    </div>
                    <div className="col foot-contact">
                        <h4>Contact us</h4>
                        <p><img src={call} alt="" />+910000000000</p>
                        <p><img src={email} alt="" />info@vision.com</p>
                        <p><img src={location} alt="" />Flat no. , Street no. , City,Country, Pincode</p>
                    </div>
                    <div className="col quick-l">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#servicegrid">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col service-link">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Freight Forwarding Ocean & Air</a></li>
                            <li><a href="#">Customs Brokerage</a></li>
                            <li><a href="#">Container Storages (CFS)</a></li>
                            <li><a href="#">Transportation FTL & LTL</a></li>
                            <li><a href="#">Warehousing General & Bonded</a></li>
                            <li><a href="#">Chartering & Brokering</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className=" container text-white" />
            <p className="container text-white copyright">Copyright © 2026 Vision. All rights reserved. <span>Designed by<a href="https://goyalinfotech.com/" > Goyal Infotech</a></span></p>
        </div>
    )
}

export default Footer
