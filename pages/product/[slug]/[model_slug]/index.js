import React from 'react';
import { client, urlFor } from "../../../../lib/client";
import { FooterBanner, ModelType, ExhaustCard } from '../../../../components';



const ModelTypeIndex = ({ newModelTypes, newProductDetailDatas }) => {
  // const newModelTypes = modelTypeDatas.map(item => item.model_type).flat();


  return (
    <div>
 
        <div className="models-container">
 
          {/* {console.log(modelTypeDatas)} */}
          {console.log(newModelTypes)}
          {console.log(newProductDetailDatas)}

            {newModelTypes.length == 0? (
              newProductDetailDatas.map((newExhaustData) => <ExhaustCard key={newExhaustData._id} newExhaustData={newExhaustData} />)
            ) : (
              newModelTypes.map((newModelType) => <ModelType key={newModelType._id} newModelType={newModelType} />)
            )}

            {/* {newModelTypes?.map((newModelType) => <ModelType key={newModelType._id} newModelType={newModelType} />)} */}
        </div>
        <FooterBanner  />
    </div>
    
  )
}


  export const getServerSideProps = async ({ params: {slug, model_slug} }) => {
    const query = `*[_type == "model" && slug.current == '${model_slug}']{
      _id, slug,
      "model_type": *[_type == "model_type" && references(^._id)]{
        name, image, numOfProducts, slug,
        "modelSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug} }}`;

      const productDetailQuery = `*[_type == "model" && slug.current == '${model_slug}']{
        _id, slug,
        "exhaust_type" : *[_type == "exhaust_type" && references(^._id)]{
          name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
          "exhaustSlug": ^.slug,
          "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
          "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
      }}`;
 
    const modelTypeDatas = await client.fetch(query);
    const productDetailDatas = await client.fetch(productDetailQuery);

    const newModelTypes = modelTypeDatas.map(item => item.model_type).flat();
    const newProductDetailDatas = productDetailDatas.map(item => item.exhaust_type).flat();
      
    // if (newModelTypes.length === 0) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: `/product/${slug}/${model_slug}/:exhaust_slug`
    //     },
    //   };
    // }

    return {
      props: { newModelTypes, newProductDetailDatas }
    }
  }


export default ModelTypeIndex




