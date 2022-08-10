import React from 'react'
import { client, urlFor } from "../../../../../lib/client";
import { FooterBanner, ExhaustCard } from '../../../../../components';

const ExhaustSlug = ({ exhaustDatas }) => {
    const newExhaustDatas = exhaustDatas.map(item => item.exhaust_type).flat();
  return (
    <div>
 
        <div className="models-container">
 
          {/* {console.log(exhaustDatas)} */}
          {console.log(newExhaustDatas)}

          
          {newExhaustDatas?.map((newExhaustData) => <ExhaustCard key={newExhaustData._id} newExhaustData={newExhaustData} />)}
        </div>
        <FooterBanner  />
    </div>
  )
}


export const getServerSideProps = async ({ params: {slug, model_slug, exhaust_slug} }) => {
    const query = `*[_type == "model_type" && slug.current == '${exhaust_slug}']{
      _id, slug,
      "exhaust_type": *[_type == "exhaust_type" && references(^._id)]{
        name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
        "exhaustSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
        "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
    }}`;

    const exhaustDatas = await client.fetch(query);
    

    return {
      props: { exhaustDatas }
    }
  }


export default ExhaustSlug