import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner.1.jpeg'
import banner2 from '../../image/banner.2.jfif'
import banner3 from '../../image/banner3.jpg'

const Banner = () => {
    return (
        <div className='banner-fild'>
           <div className=' banner container'>
           <Carousel  >
        <Carousel.Item>
    <img
      className="d-block  banner-image img-fluid w-100  "
      src={ banner1 }
      alt=""
    />
    <Carousel.Caption>
      <h4 className='heading'>COVID-19: US researchers develop new cheap </h4>
      <p>US researchers have developed a novel, low-cost DNA-based vaccine that may not only provide protection against existing variants of coronavirus</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block banner-image img-fluid w-100"
      src={banner2}
      alt=""
    />
    <Carousel.Caption>
      <h4 className='heading'>Covid Protection Wanes Months After Second Shot, Booster Needed</h4>
      <p>Immunity provided by the Covid-19 vaccine from partners Pfizer Inc. and BioNTech SE weakens significantly within months, with men having less protection than women, according to research that supports the use of booster doses.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block banner-image img-fluid w-100"
      src={banner3}
      alt=""
    />
    <Carousel.Caption>
      <h4 className='heading'>Social Protection Responses to COVID-19 for Forcibly Displaced Persons</h4>
      <p>Refugees and other Persons of Concern (PoC) to UNHCR have been disproportionately impacted by the COVID-19 pandemic, leading to serious health, socio-economic and protection impacts. Some governments have included certain of these persons in national social protection2 COVID-19 responses, including flexible administrative and enrolment</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </div>
        </div>
    );
};

export default Banner;