import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const BtnSlider = ({ direction, moveSlide }) => {
  {console.log(direction, moveSlide)};
  return (
    
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      {direction === "next" ? <AiOutlineRight />: <AiOutlineLeft />}
    </button>
  )
}

export default BtnSlider