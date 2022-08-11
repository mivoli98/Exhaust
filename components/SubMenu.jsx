import React, {useState} from 'react';
import Link from 'next/link';
// import { IoMdHeartEmpty } from 'react-icons/io';

const SubMenu = ({ item }) => {
    const [subNav, setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subNav);
  return (
    <>
    <div className="sideBarList" onClick={item.subNav && showSubNav}>
        <Link href={item.path}>
            <a>
                <div className="sideBarText">
                    {item.title}
                </div>
            </a>
        </Link>
        <div>
            {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
    </div>
    
    {subNav && item.subNav.map ((item, index) => (
            // <Link to='#' key={index} >
                <div className="sideBarSubList" > 
                {item.title}
            </div>
            // </Link>
        ))}
  
    </>
  )
}

export default SubMenu