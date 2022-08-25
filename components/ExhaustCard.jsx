import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const ExhaustCard = ({ newExhaustData }) => {
    // console.log(newExhaustData)
    const {name, image, slug, price, exhaustSlug, brandSlug, modelSlug} = newExhaustData;
    const { onAdd, qty } = useStateContext();
  return (
    <div>
            
                <div className="main-container-model" >
                     <div className="models-container" >
                     <Link href={`/product/${brandSlug[0].brandSlug.current}/${modelSlug[0].slug.current}/${exhaustSlug.current}/${slug.current}`}>
                        <img className="models-card"
                            key={image._id}
                            src={urlFor(image && image[0])}
                            width={250}
                            height={250}
                        /> 
                    </Link>      
                    </div>
                    <div className="exhaust-card-bottom-detail">
                        <h3 className="exhaust-name">{name}</h3> 
                        <p className="exhaust-price">${price}.00</p> 
                    </div> 
                    <button type="button" className="add-to-cart-fast" onClick={() => onAdd(newExhaustData, qty)}>Add to Cart</button>             
                </div>
        </div>
  )
}

export default ExhaustCard