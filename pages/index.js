import React from 'react'
import Head from 'next/head';
import { Product, HeroBanner, FooterBanner, Navbar } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerDatas }) => {
  return (
    <div>
     {bannerDatas?.map((bannerData) => <HeroBanner key={bannerData._id} heroBanner={bannerData} /> )} 
     {console.log(bannerDatas)}
    <div className="products-heading">
      <h2>Shop By Brand</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner />
    </div>
  )  
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerDatas = await client.fetch(bannerQuery);

  return {
    props: { products, bannerDatas }
  }
}

export default Home