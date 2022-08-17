import React, {useState} from 'react';
import { BsChevronDown } from 'react-icons/bs'

const SubMenu = ({ item }) => {
    const [open, setOpen] = useState(false);
    if(item.subNav) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        <a href={item.path}>{item.title}</a>
                    </span>
                    <BsChevronDown className="toggleBtn" onClick={() => setOpen(!open)}/>
                </div>
                <div className="sidebar-content">
                    { item.subNav.map((firstMenu, index) => <SubMenu key={index} item={firstMenu} />)}
                    </div>
            </div>
          )
    } else {
        return (
            <a href={item.path} className="sidebar-item plain">
                <div className="sidebar-title">{item.title}</div>     
            </a>
        )
    }
}

export default SubMenu

   