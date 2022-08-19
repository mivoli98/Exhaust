import React from 'react';
import { client, urlFor } from "../../../../lib/client";
import { ModelType, ExhaustCard, HeaderBanner, Navbar } from '../../../../components';



const ModelTypeIndex = ({ newModelTypes, newProductDetailDatas, modelTypeDatas, searchQueryDatas }) => {
  console.log('newModelTypes', modelTypeDatas)
  return (
    <div>
      <div>
        <Navbar searchExhaust={searchQueryDatas} />
        {modelTypeDatas?.map((modelTypeData) => <HeaderBanner key={modelTypeData._id} headerBanner={modelTypeData} /> )}  
      </div>
      <div className="main-container">
        <div className="models-container">
            {newModelTypes.length == 0? (
              newProductDetailDatas.map((newExhaustData) => <ExhaustCard key={newExhaustData._id} newExhaustData={newExhaustData} />)
            ) : (
              newModelTypes.map((newModelType) => <ModelType key={newModelType._id} newModelType={newModelType} />)
            )}
        </div>
    </div>  
  </div> 
  )
}


  export const getServerSideProps = async ({ params: {slug, model_slug} }) => {
    const query = `*[_type == "model" && slug.current == '${model_slug}']{
      _id, slug, name,
      "model_type": *[_type == "model_type" && references(^._id)]{
        name, image, numOfProducts, slug,
        "modelSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug} }}`;

      const productDetailQuery = `*[_type == "model" && slug.current == '${model_slug}']{
        _id, slug, name,
        "exhaust_type" : *[_type == "exhaust_type" && references(^._id)]{
          name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
          "exhaustSlug": ^.slug,
          "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
          "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
      }}`;
 
    const modelTypeDatas = await client.fetch(query);
    const productDetailDatas = await client.fetch(productDetailQuery);

    const searchQuery = '*[_type == "exhaust_type"]';
    const searchQueryDatas = await client.fetch(searchQuery);

    const newModelTypes = modelTypeDatas.map(item => item.model_type).flat();
    const newProductDetailDatas = productDetailDatas.map(item => item.exhaust_type).flat();

    return {
      props: { newModelTypes, newProductDetailDatas, modelTypeDatas, searchQueryDatas }
    }
  }


export default ModelTypeIndex




