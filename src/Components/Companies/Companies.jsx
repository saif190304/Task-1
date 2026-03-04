import React from 'react';
import './Companies.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import company1 from '../../Images/c-1.png';
import company2 from '../../Images/c-2.png';
import company3 from '../../Images/c-3.png';
import LContainer from '../../Images/l-container.png';
import map from '../../Images/map-bg.png'; 

function Companies() {

  const allLogos = [
    company1, company2, company3, company1, company2, company3, company1, company2, company3, company1, 
    company2, company3, company1, company2, company3, company1, company2, company3, company1, company2, 
    company3, company1, company2, company3, company1, company2, company3, company1, company2, company3  
  ];

  const slidesData = [];
  for (let i = 0; i < allLogos.length; i += 10) {
    slidesData.push(allLogos.slice(i, i + 10));
  }

  return (
    <div className="companies-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 companies-logo-wrapper">
            <h2>Trusted By The World's <br /> Leading Companies for <span>over 180 years</span></h2>
            
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade" 
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              {slidesData.map((tenLogos, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="logo-group-container">

                    <div className="logo-row row-of-3">
                      {tenLogos.slice(0, 3).map((img, i) => (
                        <img src={img} alt="logo" key={i} />
                      ))}
                    </div>

                    <div className="logo-row row-of-4">
                      {tenLogos.slice(3, 7).map((img, i) => (
                        <img src={img} alt="logo" key={i} />
                      ))}
                    </div>

                    <div className="logo-row row-of-3">
                      {tenLogos.slice(7, 10).map((img, i) => (
                        <img src={img} alt="logo" key={i} />
                      ))}
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-6 load-container">
            <img src={LContainer} alt="container" className="img-fluid" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Companies;