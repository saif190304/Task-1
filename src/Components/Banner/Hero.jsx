import React from 'react'
import bannerImg from '../../Images/banner.jpg'
import './Hero.css'

function Hero() {
  return (
    <div id="home" className='back-banner'>
      <div className="banner text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          minHeight: '100vh',
        }}
      >
        <div className="container ">
          <div className="h-100 d-flex flex-column justify-content-center align-items-start">
            <div className="max-w-md title" data-aos="fade-right" data-aos-duration="1500">
              <h1 className="fw-bold">
                QUICKEST & SAFE <br /> DELIVERY
              </h1>
              <p className="lead">
                Reliable logistics solutions for your global business needs.
              </p>
              <a href="#contact" className="btn text-white fw-bold px-4 py-2 mt-3">
                <span>GET A QUOTE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
