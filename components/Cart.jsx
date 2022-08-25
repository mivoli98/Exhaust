import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { motion, AnimatePresence } from '../node_modules/framer-motion/dist/framer-motion';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';
const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }
  
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <motion.div 
        className="cart-container"
        key="close-icon"
        initial={{ width: 0 }}
        animate={{ width: 600 }}
        transition={{ type: "spring", bounce: 0, duration: 0.85 }}
        exit={{
                width: 0,
                opacity: 0,
                transition: { type: "spring", bounce: 0, duration: 0.85 }
        }}
        >
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities})</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)} className="btn">Continue Shopping</button>
            </Link>
          
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
              
              <div className="product" key={item._id}>
                  <a href={item.path}>
                  <img src={urlFor(item?.image[0])} className="cart-product-image"/>
                  </a>
                  <div className="item-desc">
                    <div className="flex-top">
                      <h5 className="checkout-title">{item.name}</h5>
                      <h4>${item.price}.00</h4>
                    </div>

                    <div className="flex bottom">
                      <div>
                          <p className="quantity-desc">
                            <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                            <span className="num">{item.quantity}</span>
                            <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                          </p>
                      </div>
                      <button type="button" className="remove-item" onClick={() => onRemove(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
              </div>
           
          ))}

        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom"> 
            <h3 className="order-summary">Order Summary</h3>
            <div className="shippingRate">
              <p>Shipping </p>
              <p>Calculated at Checkout</p> 

            </div>
            <div className="shippingRate">
              <p>Sales tax </p>
              <p>Calculated at Checkout</p> 
            </div>

            <div className="total">
              <h3>Subtotal </h3>
              <h3>${totalPrice}.00</h3> 
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                CHECKOUT
              </button>
            </div>
          </div>
        )}
        </motion.div>
    </div>
  )
}

export default Cart