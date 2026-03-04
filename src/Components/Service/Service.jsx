import React from 'react'
import './Service.css'
import layer1 from '../../Images/Layer-1.png'
import arrow from '../../Images/d-arow.png'
import layer2 from '../../Images/Layer-2.png'
import layer3 from '../../Images/Layer-3.png'
import layer4 from '../../Images/Layer-4.png'
import layer5 from '../../Images/Layer-5.png'
import layer6 from '../../Images/Layer-6.png'

function Service() {
    return (
        <div id="servicegrid">
            <div className="container ">
                <div className='px-3 shipping-services'>
                    <h2>Shipping & Logistics Services</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-4">
                        <div className="col" >
                            <div className="service-item">
                                <img src={layer1} alt="layer-1" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-item">
                                <img src={layer2} alt="layer-2" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="service-item">
                                <img src={layer3} alt="layer-3" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-item">
                                <img src={layer4} alt="layer-1" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-item">
                                <img src={layer5} alt="layer-1" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="service-item">
                                <img src={layer6} alt="layer-1" className='img-fluid' />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h5>Freight Forwarding <br />Ocean & Air</h5>
                                    </div>
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
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

export default Service
