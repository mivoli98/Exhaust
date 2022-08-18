import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const HeaderBanner = ({ headerBanner }) => {
    console.log('headerBanner', headerBanner)
    const { name } = headerBanner;
    console.log('name', name)

  return (
    <div className="header-banner-container">
        <div className="title-container">
            <h2 className="banner-title">{name}</h2>
            <div className="link-banner">
            <a href='/'>Home</a><i> <BsChevronRight /></i> <p>{name}</p>
            </div>     
         </div>
    </div>
  )
}

export default HeaderBanner