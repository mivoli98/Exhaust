import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const ModelType = ({ newModelType: {image, name, slug, modelSlug, brandSlug, numOfProducts} }) => {
    return (
        <div>
            <Link href={`/product/${brandSlug[0].brandSlug.current}/${modelSlug.current}/${slug.current}`}>
                <div className="main-container-model" >
                     <div className="models-container" >
                        <img className="models-card"
                            src={urlFor(image)}
                            width={250}
                            height={250}
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

export default ModelType