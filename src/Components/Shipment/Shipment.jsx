import React from 'react'
import './Shipment.css'
import seaTransport from '../../Images/slider_img_7.png'
import landTransport from '../../Images/slider_img_3.png'
import airtransport from '../../Images/slider_img_5.png'
import blueContainer from '../../Images/container.png'

function Shipment() {
  return (
    <div className="shipment-wrapper">
      <div className="container my-5">
        <div className="position-relative">
          <div className="text-white border-0 shadow shipment-area">
            <div className="row align-items-center">
              <div className="col-lg-6 content-z" data-aos="fade-right" data-aos-duration="1500">
                <h3>SHIPPING TO &amp; FROM ANYWHERE</h3>
                <p className="my-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum quas asperiores delectus quo velit architecto minima sunt accusamus cupiditate voluptatibus, perspiciatis sint molestias quisquam soluta sit amet ipsam corporis.
                </p>

                <div className="d-flex justify-content-between justify-content-lg-start gap-2 gap-md-3 mt-4 flex-wrap">
                  <div className="text-center p-2 p-md-3 transpotation">
                    <span>BY SEA</span>
                    <span><img src={seaTransport} alt="By Sea" /></span>
                  </div>
                  <div className="text-center p-2 p-md-3 transpotation">
                    <span>BY LAND</span>
                    <span><img src={landTransport} alt="By Land" /></span>
                  </div>
                  <div className="text-center p-2 p-md-3 transpotation">
                    <span>BY AIR</span>
                    <span><img src={airtransport} alt="By Airplane" /></span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 blue-container" data-aos="fade-left" data-aos-duration="1500">
                <img src={blueContainer} alt="blue-Container" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipment;