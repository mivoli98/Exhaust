import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
// import { useRouter } from 'next/router'

const Product = ({ product: {image, name, brandSlug} }) => {
  // const router = useRouter()
  // const { mi } = router.query
  return (
    <div>
        {/* <Link href={`/product/[slug]/${slug.current}`}> */}
        <Link href={`/product/${brandSlug.current}`}>
            <div className="product-card">
                <img 
                    src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    className="product-image"
                />
                <p className="product-name">{name}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product
