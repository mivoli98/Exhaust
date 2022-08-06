import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ExhaustCard = ({ newExhaustData: {name, image, slug, price, exhaustSlug, brandSlug, modelSlug} }) => {
  return (
    <div>
            <Link href={`/product/${brandSlug[0].brandSlug.current}/${modelSlug[0].slug.current}/${exhaustSlug.current}/${slug.current}`}>
                <div className="main-container-model" >
                     <div className="models-container" >
                        <img className="models-card"
                            src={urlFor(image && image[0])}
                            width={350}
                            height={350}
                            // className="product-image" 
                            // onMouseEnter={() => setIndex(i)}
                        />       
                    </div>
                    <p className="product-name">{name}</p> 
                    <p className="product-price">${price}</p>             
                </div>
            </Link>
        </div>
  )
}

export default ExhaustCard