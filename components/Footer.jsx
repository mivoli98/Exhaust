import React from 'react';
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="container">
      <div className="sec aboutus">
        <h2>About Us</h2>
        <p>WE exhaust has pioneered a variety of improvements in the design of performance exhaust systems and carbon fiber accessories. 
          Every WE exhaust is made from T309 stainless steel and designed for extreme temperature applications,
          employing mandrel-bent tubing, and hand-welded construction with the utmost care and professionalism.
        </p>
        <ul className="sci">
         <li><a href="#"><i><BsFacebook /></i></a></li>
         <li><a href="#"><i><BsInstagram /></i></a></li>
         <li><a href="#"><i><FaTiktok /></i></a></li>
       </ul>
      </div>

      <div className="sec quickLinks">
        <h2>Quick Links</h2>
        <ul>
            <li><a href="/product/LAMBORGHINI">Lamborghini</a></li>
            <li><a href="/product/FERRARI">Ferrari</a></li>
            <li><a href="/product/MERCEDES-AMG">Mercedes AMG</a></li>
            <li><a href="/product/PORSCHE">Porsche</a></li>
            <li><a href="/product/AUDI">Audi</a></li>
            <li><a href="/product/MCLAREN">McLaren</a></li>
        </ul>
      </div>

      <div className="sec contact">
        <h2>Contact Info</h2>
          <ul className="info"l>
            <li>
              <span><i><FaMapMarkerAlt/></i></span>
              <span>647 Linda Sreet <br/>
              Houston, TX 77840, <br/>USA</span>
            </li>
            <li>
              <span><i><BsFillTelephoneFill/></i></span>
              <p><a href="tel:3465295644"> +1 346 529 5644</a><br/>
              <a href="tel:3465295644"> +1 346 529 5644</a></p>
            </li>
            <li>
              <span><i><MdEmail/></i></span>
              <p> <a hef="mailto:example@gmail.com">WeExhaust@gmail.com</a></p>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer