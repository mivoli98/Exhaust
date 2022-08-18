import React, {useState} from 'react'
import BtnSlider from './BtnSlider';
import { urlFor } from '../lib/client';

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
        <div>
          <img 
            key={item._id}
            src={urlFor(item)}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          />
        </div>
      ))}
        <div className="buttonText">
          <h1>{name}</h1>
          <a href="/">
          <button type="button" className="button-banner">{buttonText}</button>
          </a>
        </div>

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  )
}

export default HeroBanner