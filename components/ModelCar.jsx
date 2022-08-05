import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ModelCar = ({ newModel: {image, name, slug, numOfProducts, parentSlug} }) => {

    return (
        <div>
            <Link href={`/product/${parentSlug.current}/${slug.current}`}>
                <div className="main-container-model" >
                     <div className="models-container" >
                        <img className="models-card"
                            src={urlFor(image)}
                            width={350}
                            height={350}
                            // className="product-image" 
                            // onMouseEnter={() => setIndex(i)}
                        />       
                    </div>
                    <p className="product-name">{name}</p> 
                    <p className="num-model">{numOfProducts} Products</p> 
                </div>
            </Link>
        </div>
      )
}

export default ModelCar