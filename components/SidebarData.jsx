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
                subNav: [
                    {
                        title: 'LP750SV',
                        path: '/product/LAMBORGHINI/AVENTADOR/LP750-SV', 
                    },
                    {
                        title: 'LP700',
                        path: '/product/LAMBORGHINI/AVENTADOR/LP700', 
                    },
                    {
                        title: 'SVJ/Ultimae',
                        path: '/product/LAMBORGHINI/AVENTADOR/SVJ-Ultimae', 
                    },
                    {
                        title: 'S LP740',
                        path: '/product/LAMBORGHINI/AVENTADOR/S-LP740', 
                    },
                ]
            },

            {
                title: 'DIABLO',
                path: '/product/LAMBORGHINI/DIABLO',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
            },

            {
                title: 'GALLARDO',
                path: '/product/LAMBORGHINI/GALLARDO',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
                subNav: [
                    {
                        title: 'SUPERLEGGERA',
                        path: '/product/LAMBORGHINI/GALLARDOL/SUPERLEGGERA', 
                    },
                    {
                        title: 'GEN1 (Pre-LP)',
                        path: '/product/LAMBORGHINI/GALLARDOL/GEN1-(Pre-LP)', 
                    },
                    {
                        title: 'Gen2 (LP550/560/570)',
                        path: '/product/LAMBORGHINI/GALLARDOL/Gen2-(LP550-560-570)', 
                    },
                ]
            },
            {
                title: 'HURACAN',
                path: '/product/LAMBORGHINI/HURACAN',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
                subNav: [
                    {
                        title: 'LP580/610',
                        path: '/product/LAMBORGHINI/HURACAN/LP580-610', 
                    },
                    {
                        title: 'EVO',
                        path: '/product/LAMBORGHINI/HURACAN/EVO', 
                    },
                    {
                        title: 'STO',
                        path: '/product/LAMBORGHINI/HURACAN/STO', 
                    },
                    {
                        title: 'PERFORMANTE',
                        path: '/product/LAMBORGHINI/HURACAN/PERFORMANTE', 
                    },
                ]
            },
            {
                title: 'MURCIELAGO',
                path: '/product/LAMBORGHINI/MURCIELAGO',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
                subNav: [
                    {
                        title: 'LP580',
                        path: '/product/LAMBORGHINI/MURCIELAGO/LP580', 
                    },
                    {
                        title: 'LP640/670SV',
                        path: '/product/LAMBORGHINI/MURCIELAGO/LP640-670SV', 
                    },
                ]
            },
            {
                title: 'URUS',
                path: '/product/LAMBORGHINI/URUS',
                iconClosed: <AiFillCaretUp/>,
                iconOpened: <AiFillCaretDown />,
            }

        ]
    },
    {
        title: 'MERCEDES',
        path: '/product/MERCEDES-AMG',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
    },
    {
        title: 'FERRARI',
        path: '/product/FERRARI',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
    },
    {
        title: 'AUDI',
        path: '/product/AUDI',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
        subNav: [
            {
                title: 'R8',
                path: '/product/AUDI/R8', 
            },
            {
                title: 'RS4',
                path: '/product/AUDI/RS4', 
            },
        ]
    },
    {
        title: 'MCLAREN',
        path: '/product/MCLAREN',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
    },
    {
        title: 'PORSCHE',
        path: '/product/PORSCHE',
        iconClosed: <AiFillCaretUp />,
        iconOpened: <AiFillCaretDown />,
    },
]

