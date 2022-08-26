import React, {useState} from 'react'
import BtnSlider from './BtnSlider';
import { urlFor } from '../lib/client';
import { AiOutlineDoubleRight } from 'react-icons/ai'

const HeroBanner = ({ heroBanner }) => {
  const { image, buttonText, name } = heroBanner;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== image.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === image.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(image.length)
    }
  }
  return (
    <div className="hero-banner-container">
      {image?.map((item, index) => (
        <div key={index} >
          <img 
            key={item._id}
            src={urlFor(item)}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          />
        </div>
      ))}
        <div className={slideIndex != 1 ? "buttonTextSlide2" : "buttonText"}>
          <h2>{name}</h2>
          <div className="buttonText-des">
          <span> <p>Bring your vehicle to a smooth and safe stop</p>
          <p>with top-quality exhaust components</p></span>
          </div>
          <a href="/">
          <button type="button" className={slideIndex != 1 ? "buttonTextSlide2-banner" : "button-banner"}>{buttonText} <i><AiOutlineDoubleRight /></i> </button>
          </a>
        </div>

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  )
}

export default HeroBanner