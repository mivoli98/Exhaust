import React from 'react'
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
// import Link from 'next/link';


const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <h2>WE Exhaust</h2>
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