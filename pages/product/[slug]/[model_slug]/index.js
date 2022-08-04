import React from 'react';
import { client, urlFor } from "../../../../lib/client";
import { FooterBanner, ModelType } from '../../../../components';

const ModelTypeIndex = ({ modelTypeDatas }) => {
  return (
    <div>
        <div className="models-container">
          {/* {console.log(newModels)}
          {console.log(modelData)} */}
          {/* {console.log(modelTypeSlug)}
          {console.log(modelSlug)} */}
          {console.log(modelTypeDatas)}
            {modelTypeDatas?.map((modelTypeData) => <ModelType key={modelTypeData._id} modelTypeData={modelTypeData} />)}
        </div>
        <FooterBanner  />
    </div>
    
  )
}

export const getStaticPaths = async () => {
    const query_model_type = `*[_type == "model_type"] {
        slug {
            current
        }
    }
    `;
    const models = await client.fetch(query_model_type);
   
    const paths = models.map((model) => ({
        params: {
            slug: 'LAMBORGHINI',
          model_slug: 'AVENTADOR'
        }
    }));


    return {
        paths,
        fallback: 'blocking'
    }
  }
  
  
  export const getStaticProps = async ({ params: {slug, model_slug} }) => {

    const query_slug = `*[_type == "model" && slug.current == '${model_slug}']{
        _id, 
        "model_type": *[_type == "model_type" && references(^._id)]{
          name, image, numOfProducts, slug}}`
    
    const modelSlug = await client.fetch(query_slug);
    
    console.log(modelSlug)
  
    return {
      props: { modelSlug }
    }
  }

//   export const getServerSideProps = async ({ params: {model_slug, slug} }) => {
//     // const query = `*[_type == "model_type" && slug.current == '${model_slug}']`
//         // "model_type": *[_type == "model_type" && references(^._id)]{
//         //   name, image, numOfProducts, slug}}`;

//     const query = '*[_type == "model_type" && references('AVENTADOR')]';
//     const modelTypeDatas = await client.fetch(query);
    
//     console.log(modelTypeDatas)
//     return {
//       props: { modelTypeDatas }
//     }
//   }


export default ModelTypeIndex




