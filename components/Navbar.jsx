import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Cart from './Cart';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from '../node_modules/framer-motion/dist/framer-motion';
import { useStateContext } from '../context/StateContext';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import logo from '../assets/logo.jpg';
import Image from 'next/image';
import { useClickOutside } from 'react-click-outside-hook';

const Navbar = ({ searchExhaust }) => {
  console.log("search", searchExhaust)
    
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [toggle, setToggle] = useState(false);

  const [parentRef, isClickedOutside] = useClickOutside();


  useEffect(() => {
      if (isClickedOutside) 
      setToggle(false);
    }, [isClickedOutside]);
  
  return (
    <div className="navbar-container">
      <div className="ulNav">
          <Link href="/" className="logo">
            <Image 
            className="logo-nav"
            src={logo}
            width={60} 
            height={60} 
            alt="logo" />
            </Link>
          <button className="Shop-btn" onClick={() => setToggle(true)}>Shop</button>
      </div>

      <div className="leftPage-icon">
        <SearchBar searchBarExhaust={searchExhaust} />
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      </div>


          {/* {search && <SearchBar />} */}
          
          {toggle &&  (          
            // <motion.div className="motionDiv"
            
            <motion.div ref={parentRef} className="motionDiv" 
              // whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              > 
              <HiX className="closeNav" onClick={() => setToggle(false)} />
                <SideBar  />

            </motion.div>     
          )}
       
          {showCart && <Cart />}     
    </div>
  )
}

export default Navbar