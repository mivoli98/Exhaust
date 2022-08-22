import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from '../node_modules/framer-motion/dist/framer-motion';
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
        <span className={totalQuantities === 0 ? "cart-item-qty-if-0qty" : "cart-item-qty"}>{totalQuantities}</span>
      </button>
      </div>


      <AnimatePresence>
          
          {toggle &&  (          
            
            <motion.div ref={parentRef} className="motionDiv" 
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              transition={{ type: "spring", bounce: 0, duration: 0.85}}
              
              exit={{
                width: 0,
                opacity: 0,
                transition: { type: "spring", bounce: 0, duration: 0.85 }
              }}

              > 
              <HiX className="closeNav" onClick={() => setToggle(false)} />
                <SideBar  />

            </motion.div>     
          )}

       </AnimatePresence>
       <AnimatePresence>
          {showCart && <Cart />}   
        </AnimatePresence>  
    </div>
  )
}

export default Navbar