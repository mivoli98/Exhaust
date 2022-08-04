import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
// import { useRouter } from 'next/router';

const ModelCar = ({ newModel: {image, name, slug, numOfProducts} }) => {
    // const router = useRouter();
    return (
        <div>
            <Link href={`/product/[slug]/[${slug.current}]`}>
        
            {/* <Link href="/product/[slug]" as={`/product/${slug.current}`}> */}
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