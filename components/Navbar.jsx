import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from '../node_modules/framer-motion/dist/framer-motion';

// import { Cart } from './';
// import { useStateContext } from '../context/StateContext';
const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();

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

        <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>

      
          {toggle && (          
            <motion.div className="motionDiv"
              // whileInView={{ x: [0, 300] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              >
                <HiX className="closeNav" onClick={() => setToggle(false)} />
                <ul className="sideBar">
                {['MERCEDES AMG', 'FERRARI', 'AUDI', 'MCLAREN', 'PORSCHE', 'LAMBORGHINI'].map((item) => (
                    <li className="sideBarList" key={item}>
                      <button className="sideBarText" href={`#${item}`} onClick={() => setToggle(false)}>{item}</button>
                    </li>
                ))}
                </ul>

            </motion.div>
           
          )}
         


      

      {/* <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button> */}

      {/* {showCart && <Cart />} */}



      {/* drop-down menu */}
      
    </div>
  )
}

export default Navbar