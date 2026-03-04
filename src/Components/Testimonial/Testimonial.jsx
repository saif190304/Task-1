import React from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonial() {
    return (
        <div className="form-sec" id="contact">
            <div className="container-fluid">
                <form className="cont-form" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">First Name*</label>
                                    <input type="text" className="form-control shadow-none" placeholder="" aria-label="First name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Last Name*</label>
                                    <input type="text" className="form-control shadow-none" placeholder="" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email *</label>
                                    <input type="text" className="form-control shadow-none" placeholder="" aria-label="Email" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mobile Number *</label>
                                    <input type="text" className="form-control shadow-none" placeholder="" aria-label="Mobile Number" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label className="form-label">Message *</label>
                                    <textarea className="form-control shadow-none" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-lg-5 text-white form-text">
                            <h2 className="fw-bold mb-3" style={{ color: '#000', fontSize: '2.5rem' }}>Let’s Connect with us</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button type="submit" className="btn btn-submit text-white fw-bold">SUBMIT</button>
                        </div>
                    </div>
                </form>

                <div className="container ">
                    <div className='text-white testimonial'>
                        <div className="row align-items-center">
                            <div className="col-lg-4 t-head">
                                <h6>Testimonial</h6>
                                <h2>100% Approved by Customers</h2>
                                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className="btn">View more</button>
                            </div>

                            <div className="col-lg-8">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={2}
                                    slidesPerGroup={1}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000 }}
                                    breakpoints={{
                                        0: { slidesPerView: 1, slidesPerGroup: 1 },
                                        992: { slidesPerView: 2, slidesPerGroup: 1 }
                                    }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="testimonial-card">
                                            <div className="quote-icon" style={{ fontSize: '50px', color: '#f39c36' }}>“</div>
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut maxime, consequuntur
                                                sapiente rem voluptates labore, cupiditate quam nam eos expedita facere molestiae aspernatur minus
                                                veniam quis recusandae dolor ducimus.</p>
                                            <h3>JENNET COLE</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimonial-card">
                                            <div className="quote-icon" style={{ fontSize: '50px', color: '#f39c36' }}>“</div>
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut maxime, consequuntur
                                                sapiente rem voluptates labore, cupiditate quam nam eos expedita facere molestiae aspernatur minus
                                                veniam quis recusandae dolor ducimus.</p>
                                            <h3>JENNET COLE</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimonial-card">
                                            <div className="quote-icon" style={{ fontSize: '50px', color: '#f39c36' }}>“</div>
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut maxime, consequuntur
                                                sapiente rem voluptates labore, cupiditate quam nam eos expedita facere molestiae aspernatur minus
                                                veniam quis recusandae dolor ducimus.</p>
                                            <h3>JENNET COLE</h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-card">
                                            <div className="quote-icon" style={{ fontSize: '50px', color: '#f39c36' }}>“</div>
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut maxime, consequuntur
                                                sapiente rem voluptates labore, cupiditate quam nam eos expedita facere molestiae aspernatur minus
                                                veniam quis recusandae dolor ducimus.</p>
                                            <h3>JENNET COLE</h3>
                                        </div>
                                    </SwiperSlide><SwiperSlide>
                                        <div className="testimonial-card">
                                            <div className="quote-icon" style={{ fontSize: '50px', color: '#f39c36' }}>“</div>
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut maxime, consequuntur
                                                sapiente rem voluptates labore, cupiditate quam nam eos expedita facere molestiae aspernatur minus
                                                veniam quis recusandae dolor ducimus.</p>
                                            <h3>JENNET COLE</h3>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;