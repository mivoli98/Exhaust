import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';



const ModelType = ({ modelTypeData: {image, name, slug, numOfProducts} }) => {
    return (
        <div>
            <Link href={`/product/[${slug.current}]`}>
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

export default ModelType