import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app___wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper-content' >
          <p className='p__opensans' style={{marginBottom: "2rem"}} >Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant'style={{color: "#DCCA87", margin: "2rem 0"}} >Opening Hours</p>
          <p className='p__opensans' >Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans' >Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}} >View More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
