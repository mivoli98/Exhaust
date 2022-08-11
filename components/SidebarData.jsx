import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const SidebarData =[
    {
        title: 'LAMBORGHINI',
        path: '/product/LAMBORGHINI',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
        subNav: [
            {
                title: 'AVENTADOR',
                path: '/product/LAMBORGHINI/AVENTADOR',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
                // subNav: [
                //     {
                //         title: 'Model-type',
                //         path: '/Brand/Model/model-type', 
                //     }
                // ]
            }
        ]
    }
]




// const SidebarData = () => {
//   return (
//     [
//         {
//             title: 'Brand',
//             path: '/Brand',
//             iconClosed: <RiIcons.RiArrowGoBackFill />,
//             iconOpened: <RiIcons.RiArrowUpFill />,
//             subNav: [
//                 {
//                     title: 'Model',
//                     path: '/Brand/Model',
//                     iconClosed: <RiIcons.RiArrowGoBackFill />,
//                     iconOpened: <RiIcons.RiArrowUpFill />,
//                     subNav: [
//                         {
//                             title: 'Model-type',
//                             path: '/Brand/Model/model-type', 
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
//   )
// }

// export default SidebarData
