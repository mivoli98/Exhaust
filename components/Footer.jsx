import React from 'react';
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="container">
      <div className="sec aboutus">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <li><a href="#">Lamborghini</a></li>
            <li><a href="#">Ferrari</a></li>
            <li><a href="#">Mercedes AMG</a></li>
            <li><a href="#">Porsche</a></li>
            <li><a href="#">Audi</a></li>
            <li><a href="#">McLaren</a></li>
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
              <p> <a hef="mailto:example@gmail.com">example@gmail.com</a></p>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer