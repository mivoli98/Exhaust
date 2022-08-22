import React from 'react'
import { client, urlFor } from "../../../../../lib/client";
import { ExhaustCard, HeaderBanner, Navbar, SortedPrice } from '../../../../../components';

const ExhaustSlug = ({ exhaustDatas, searchQueryDatas }) => {
    const newExhaustDatas = exhaustDatas.map(item => item.exhaust_type).flat();
    console.log('exhaustDatas', exhaustDatas )
  return (
    <div>
        <div>
          <Navbar searchExhaust={searchQueryDatas} />
          {exhaustDatas?.map((exhaustData) => <HeaderBanner key={exhaustData._id} headerBanner={exhaustData} /> )}  
        </div>
      <div className="main-container">
          <SortedPrice />
          <div className="models-container">
            {newExhaustDatas?.map((newExhaustData) => <ExhaustCard key={newExhaustData._id} newExhaustData={newExhaustData} />)}
          </div>
      </div>
    </div>
  )
}


export const getServerSideProps = async ({ params: {slug, model_slug, exhaust_slug} }) => {
    const query = `*[_type == "model_type" && slug.current == '${exhaust_slug}']{
      _id, slug, name,
      "exhaust_type": *[_type == "exhaust_type" && references(^._id)]{
        name, image, slug, price, description, availability, shipping_weight, shipping_dimensions, size,
        "exhaustSlug": ^.slug,
        "brandSlug": *[_type == "product" && brandSlug.current == '${slug}']{brandSlug},
        "modelSlug": *[_type == "model" && slug.current == '${model_slug}']{slug} 
    }}`;

    const searchQuery = '*[_type == "exhaust_type"]';
    const searchQueryDatas = await client.fetch(searchQuery)

    const exhaustDatas = await client.fetch(query);
    

    return {
      props: { exhaustDatas, searchQueryDatas }
    }
  }


export default ExhaustSlug