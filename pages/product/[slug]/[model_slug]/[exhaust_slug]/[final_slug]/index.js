import React, { useState } from 'react'
import { client, urlFor } from "../../../../../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ExhaustCard, Navbar } from '../../../../../../components';
import { useStateContext } from '../../../../../../context/StateContext';

const ShowExhaust = ({ exhaustDetails, exhaustAll, noModelTypeAll, searchQueryDatas }) => {

    const newExhaustAll = exhaustAll.map(item => item.exhaust_type).flat();
    const newNoModelTypeAll = noModelTypeAll.map(item => item.exhaust_type).flat();
    const { name, image, slug, price, description, availability, 
        shipping_weight, shipping_dimensions, size} = exhaustDetails;

    const [index, setIndex ] = useState(0)
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    
    const handleBuyNow = () => {
      onAdd(exhaustDetails, qty);

      setShowCart(true);
    }
  return (

    <div>
        <Navbar searchExhaust={searchQueryDatas} />
         <div className="empty-div-banner">
          </div>

      <div className="main-container">        
              <div className="product-detail-container">
                  <div>
                      <div className= "image-container">
                          <img 
                          className="product-detail-image"
                          src={urlFor(image && image[index])} />
                      </div>
                      <div className="small-images-container">
                        {image?.map((item, i) => (
                          <img 
                            key={i}
                            src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}

                          />
                        ))}

                      </div>
                  </div>
                  <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <p className="price">${price}.00</p>
                    <p className="dash">______________________</p>

                    <div className="shipping_weight">
                      <table className="table">
                        <tr>
                            <th>Shipping Weight </th>
                            <td>{shipping_weight}</td>
                        </tr>
                        <tr>
                            <th>Shipping Dimensions </th>
                            <td>{shipping_dimensions}</td>
                        </tr>
                        <tr>
                            <th>Size </th>
                            <td>{size}</td>
                        </tr>
                    </table>
                    </div>
                    
                    <p className="availability">{availability}</p>
                    <div className="quantity">
                      <h3>Quantity:</h3>
                      <p className="quantity-desc">
                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                      </p>

                    </div>
                    <div className="buttons">
                      <button type="button" className="add-to-cart" onClick={() => onAdd(exhaustDetails, qty)}>Add to Cart</button>
                      <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                  </div>
              </div>

              <div className="exhaust-description">
                <h2>Description </h2>
                  <p>{description}</p>
              </div>

              <div className="maylike-products-wrapper">
                <h2>You May Also Like</h2>
                <div className="marquee">
                  <div className="maylike-products-container track">  
                        {newExhaustAll.map((item) => (
                          <ExhaustCard key={item._id}
                          newExhaustData={item} />
                      ))}
                      
                      { exhaustAll.modelSlug === exhaustAll.exhaustSlug && (
                        newNoModelTypeAll.map((item) => (
                          <ExhaustCard key={item._id}
                          newExhaustData={item} />
                        )))}
                  </div>
                </div>
              </div>
          </div>


    </div>
    
  )
}

export const getServerSideProps = async ({ params: {slug, model_slug, exhaust_slug, final_slug} }) => {
    const exhaust_products = `*[_type == "model_type" && slug.current == '${exhaust_slug}']{
      _id, slug,
      "exhaust_type": *[_type == "exhaust_type" && references(^._id)]{
        name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
        "exhaustSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
        "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
    }}`;

    const query = `*[_type == "exhaust_type" && slug.current == '${final_slug}'][0]`;
    
    const noModelTypeQuery = `*[_type == "model" && slug.current == '${model_slug}']{
      _id, slug,
      "exhaust_type" : *[_type == "exhaust_type" && references(^._id)]{
        name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
        "exhaustSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
        "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
    }}`;
    const exhaustDetails = await client.fetch(query);

    const exhaustAll = await client.fetch(exhaust_products);

    const noModelTypeAll = await client.fetch(noModelTypeQuery);


    const searchQuery = '*[_type == "exhaust_type"]';
    const searchQueryDatas = await client.fetch(searchQuery)
    

    return {
      props: { exhaustDetails, exhaustAll, noModelTypeAll, searchQueryDatas }
    }
  }

export default ShowExhaust