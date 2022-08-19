import React from 'react'
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../assets/logo.jpg';
import Image from 'next/image'


const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <Image 
            src={logo}
            width={200} 
            height={200} 
            alt="logo" />
        </div>

        <div className="right">
          <div className="right-top">
            <h2>About Us</h2>
            <p>Capristo has pioneered a variety of improvements in the design </p>
            <p>of performance exhaust systems and carbon fiber accessories.</p>
            <p>of performance exhaust systems and carbon fiber accessories.</p>
            <p>of performance exhaust systems and carbon fiber accessories.</p>
          </div>
          <div className="right-bottom"> 
            <p><i> <FiMapPin /></i>Houston, USA</p>
            <p><i><FiPhoneCall /></i>+ 1 (346) 529 5555</p> 
            <p><i> <AiOutlineMail /></i>Example@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner