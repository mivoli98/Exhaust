import React from 'react'
// import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
        <div>
            <img src={urlFor(heroBanner.image)}
            alt="banner" className="hero-banner-image" 
            />
        </div>
    </div>
  )
}

export default HeroBanner