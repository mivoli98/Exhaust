import React from 'react';
// import styled from 'styled-components'
import link from 'next/link';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';


const SideBar = () => {
    console.log(SidebarData)
  return (

    <div className="sideBarText">
        {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
        ))}
        </div>
  )
}

export default SideBar