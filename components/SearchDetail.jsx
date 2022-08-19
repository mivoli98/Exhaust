import React from "react";
import { urlFor } from '../lib/client';

const SearchDetail = (props) => {
const {image, name, price, path } = props;
  return (
    <div>
        <a href={path}>
        <div className="SearchDetail-container">
            <div className="thumbNail">
                <img src={urlFor(image)} />
            </div>
                <h3 className="name-search">{name}</h3>
                <span className="price-search">${price}.00</span>    
        </div>
        </a>
    </div>
  )
}

export default SearchDetail
