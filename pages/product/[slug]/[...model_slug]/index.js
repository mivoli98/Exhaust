import React from 'react';
import { client, urlFor } from "../../../../lib/client";
import { FooterBanner, ModelType } from '../../../../components';



const ModelTypeIndex = ({ modelTypeDatas }) => {
  const newModelTypes = modelTypeDatas.map(item => item.model_type).flat();


  return (
    <div>
 
        <div className="models-container">
 
          {console.log(modelTypeDatas)}
          
            {newModelTypes?.map((newModelType) => <ModelType key={newModelType._id} newModelType={newModelType} />)}
        </div>
        <FooterBanner  />
    </div>
    
  )
}


  export const getServerSideProps = async ({ params: {slug, model_slug} }) => {
    const query = `*[_type == "model" && slug.current == '${model_slug}']{
      _id, 
      "model_type": *[_type == "model_type" && references(^._id)]{
        name, image, numOfProducts, slug }}`;
 
    const modelTypeDatas = await client.fetch(query);
    

    return {
      props: { modelTypeDatas }
    }
  }


export default ModelTypeIndex




