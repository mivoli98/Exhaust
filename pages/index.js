import React from 'react'
import { Product, HeroBanner, Navbar } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerDatas, searchQueryDatas }) => {
  return (
    <div>
      <Navbar searchExhaust={searchQueryDatas} />
     {bannerDatas?.map((bannerData) => <HeroBanner key={bannerData._id} heroBanner={bannerData} /> )} 
     <div className="main-container">
      <div className="products-heading">
        <h2>Shop By Brands</h2>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      </div> 
    </div>
  )  
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerDatas = await client.fetch(bannerQuery);

  const searchQuery = '*[_type == "exhaust_type"]';
  const searchQueryDatas = await client.fetch(searchQuery);

  return {
    props: { products, bannerDatas, searchQueryDatas }
  }
}

export default Home