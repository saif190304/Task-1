import React from 'react';
import './About.css';
import AirPlane from '../../Images/airplane.png';
import shipCargo from '../../Images/cargo-ship.png';
import packageBox from '../../Images/package.png';
import hazardous from '../../Images/cargo.png';
import projectCargo from '../../Images/delivery-box.png';

function About() {
    return (
        <>
            <div id="about" className='about-plain'>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-up-right">
                        <div className="position-relative plain-img">
                            <img src={AirPlane} alt="Airplane" className="img-fluid" />
                        </div>
                    </div>
                    <div className='container about-sec col-lg-6' data-aos="fade-left" data-aos-duration="1500">
                        <h6 className="text-warning text-uppercase">About Us</h6>
                        <h2 className="display-3 fw-bold mb-4">Solution for your business need</h2>
                        <p>
                            We make certain that no stone is left unturned <br />
                            when it comes to offering you the best and most systematic shipping experience.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi optio eos <br />pariatur accusamus, nesciunt architecto!</p>
                        <button className="btn text-white px-4 py-2 fw-bold mt-3"><span>VIEW MORE</span></button>
                    </div>
                </div>
            </div>

            {/* cargo services */}
            <div className='cargo-services'>
                <div className='container'>
                    <div className="row mt-5 delivery-cargo">
                        <div className="col-md-6 col-lg-3 col-services">
                            <div className="feature-card text-start p-4" data-bs-toggle="modal" data-bs-target="#oversizedModal" data-aos="flip-up" data-aos-duration="1500">
                                <div className="feature-icon"><img src={shipCargo} alt="" /></div>
                                <h3 className="fw-bold mb-2 text-start">Oversized <br />Cargo</h3>
                                <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nostrum. Vel saepe excepturi fugit dolorem?</p>
                            </div>
                            <div className="modal fade" id="oversizedModal">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-center p-4">
                                        <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={shipCargo} alt="" className='img-fluid mb-3' />
                                            <h3 className="fw-bold">Oversized Cargo Details</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod, mollitia sed repellendus harum tenetur!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-services">
                            <div className="feature-card text-start p-4" data-bs-toggle="modal" data-bs-target="#productionModal" data-aos="flip-up" data-aos-duration="1500">
                                <div className="feature-icon"><img src={packageBox} alt="" /></div>
                                <h3 className="fw-bold mb-2 text-start">Production <br />Cargo</h3>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim, libero tempora repudiandae vero ad.</p>
                            </div>
                            <div className="modal fade" id="productionModal">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-center p-4">
                                        <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={packageBox} alt="" className='img-fluid mb-3' />
                                            <h3 className="fw-bold">Production Cargo Details</h3>
                                            <p>Specialized handling for production and set materials.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-6 col-lg-3 col-services">
                            <div className="feature-card text-start p-4" data-bs-toggle="modal" data-bs-target="#oversizedModal" data-aos="flip-up" data-aos-duration="1500">
                                <div className="feature-icon"><img src={hazardous} alt="" /></div>
                                <h3 className="fw-bold mb-2 text-start">Hazardous <br />Material Cargo</h3>
                                <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto quo, fuga deserunt quam repellendus.</p>
                            </div>
                            <div className="modal fade" id="oversizedModal">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-center p-4">
                                        <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={shipCargo} alt="" className='img-fluid mb-3' />
                                            <h3 className="fw-bold">Hazardous Material Details</h3>
                                            <p>Our oversized cargo services include route planning and heavy-lift cranes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-6 col-lg-3 col-services " style={{border:'none'}}>
                            <div className="feature-card text-start p-4" data-bs-toggle="modal" data-bs-target="#oversizedModal" data-aos="flip-up" data-aos-duration="1500">
                                <div className="feature-icon"><img src={projectCargo} alt="" /></div>
                                <h3 className="fw-bold mb-2 text-start">Oversized <br />Cargo</h3>
                                <p className='text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto aliquid totam, molestiae sed asperiores?</p>
                            </div>
                            <div className="modal fade" id="oversizedModal">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-center p-4">
                                        <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={shipCargo} alt="" className='img-fluid mb-3' />
                                            <h3 className="fw-bold">Oversized Cargo Details</h3>
                                            <p>Our oversized cargo services include route planning and heavy-lift cranes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;