import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from '../node_modules/framer-motion/dist/framer-motion';
import { useStateContext } from '../context/StateContext';
import SideBar from './SideBar';

const Navbar = () => {
    
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [toggle, setToggle] = useState(false)
  return (
    <div className="navbar-container">
      <ul className="ulNav">
        <li className="logo">
          <Link href="/">DOM Exhaust</Link>
        </li> 
        <li>
          <button className="app__navbar-menu" onClick={() => setToggle(true)}>Shop</button>
        </li>
      </ul>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      
          {toggle && (          
            <motion.div className="motionDiv"
              // whileInView={{ x: [0, 300] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              > 
              <HiX className="closeNav" onClick={() => setToggle(false)} />
              <div className="sideBar">
                
                {/* <ul className="sideBar">
                {['MERCEDES AMG', 'FERRARI', 'AUDI', 'MCLAREN', 'PORSCHE', 'LAMBORGHINI'].map((item) => (
                    <li className="sideBarList" key={item}>
                      <button className="sideBarText" href={`#${item}`} onClick={() => setToggle(false)}>{item}</button>
                    </li>
                ))}
                </ul> */}

                <SideBar  />
                </div>

            </motion.div>
           
          )}
         
          {showCart && <Cart />}     
    </div>
  )
}

export default Navbar