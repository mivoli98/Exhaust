import React from 'react';
import {SidebarData} from './SidebarData';

import SubMenu from './SubMenu';

const SideBar = () => {
    
  return (
    <div className="sideBar">
        {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
        ))}
        </div>
  )
}

export default SideBar