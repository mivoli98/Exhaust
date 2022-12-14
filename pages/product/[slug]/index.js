import React from 'react'
import { client, urlFor } from '../../../lib/client';
import {  ModelCar, HeaderBanner, Navbar } from '../../../components';


const ModelPage = ({ modelData, searchQueryDatas }) => {
  const newModels = modelData.map(item => item.model).flat();
    
  return (
    <div>
      <div>
      <Navbar searchExhaust={searchQueryDatas} />
      {modelData?.map((modelDatasingle) => <HeaderBanner key={modelDatasingle._id} headerBanner={modelDatasingle} /> )}  
      </div>
    <div className="main-container">
        <div className="models-container">
            {newModels?.map((newModel) => <ModelCar key={modelData._id} newModel={newModel}  />)}
        </div>
    </div>
    </div>
  )
}



export const getStaticPaths = async () => {
  const query = `*[_type == "model"] {
      slug {
          current
      }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
      params: {
          slug: product.slug.current
      }
  }));

  return {
      paths,
      fallback: 'blocking',
  }
}


export const getStaticProps = async ({ params: {slug} }) => {
  const query = `*[_type == "product" && brandSlug.current == '${slug}']{
    _id, brandSlug, name,
    "model": *[_type == "model" && references(^._id)]{
      name, image, numOfProducts, slug,
      "parentSlug": ^.brandSlug
     }}`;


  const modelData = await client.fetch(query);

  const searchQuery = '*[_type == "exhaust_type"]';
  const searchQueryDatas = await client.fetch(searchQuery);


  return {
    props: { modelData, searchQueryDatas }
  }
}


export default ModelPage