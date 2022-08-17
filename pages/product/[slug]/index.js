import React from 'react'
import { client, urlFor } from '../../../lib/client';
import {  ModelCar } from '../../../components';


const ModelPage = ({ modelData }) => {
  const newModels = modelData.map(item => item.model).flat();
    
  return (
    <div className="main-container">
        <div className="models-container">
          {console.log(newModels)}
          {console.log(modelData)}
            {newModels?.map((newModel) => <ModelCar key={modelData._id} newModel={newModel}  />)}
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
    _id, brandSlug,
    "model": *[_type == "model" && references(^._id)]{
      name, image, numOfProducts, slug,
      "parentSlug": ^.brandSlug
     }}`;


  const modelData = await client.fetch(query);


  return {
    props: { modelData }
  }
}


export default ModelPage