import React from 'react';
import { BiColumns, BiBus, BiBarChartSquare, BiBookmarkPlus, BiAlarmAdd, BiRedo } from "react-icons/bi";

const navItem = [
    {
        "title": "Dashboard",
        "icon": <BiColumns className='w-5 h-5' />
    },
    {
        "title": "Market",
        "icon": <BiBus className='w-5 h-5' />
    },
    {
        "title": "Portfolio",
        "icon": <BiBarChartSquare className='w-5 h-5' />
    },
    {
        "title": "News",
        "icon": <BiBookmarkPlus className='w-5 h-5' />
    },
    {
        "title": "Login",
        "icon": <BiAlarmAdd className='w-5 h-5' />
    },
    {
        "title": "Logout",
        "icon": <BiRedo className='w-5 h-5' />
    }
]

const DashboardSidebar = () => {
    return (
        <div className='border-r-2 min-h-[90vh] w-[80px] lg:w-[250px] pt-8 px-1 items-start justify-between'>
            <div className='flex items-center justify-center mb-8'>
                <BiAlarmAdd className='w-8 h-8'/>
                <a href="/" className='text-2xl font-bold lg:flex hidden'>Habib</a>
            </div>
            <div className='space-y-8 w-full'>
                {
                    navItem.slice(0, 4).map((item, index) =>
                        <div key={index} className="w-full flex items-center justify-start space-x-4 px-5 cursor-pointer group hover:border-gray-900 border-l-8 border-transparent">
                            <span>{item.icon}</span>
                            <h2 className='text-gray-600 group hover:text-black lg:flex hidden'>{item.title}</h2>
                        </div>
                    )
                }
                <div className='w-full border-t-2' />
                {
                    navItem.slice(4, 6).map((item, index) =>
                        <div key={index} className="w-full flex items-center justify-start space-x-4 px-5 cursor-pointer group hover:border-gray-900 border-l-8 border-transparent">
                            <span>{item.icon}</span>
                            <h2 className='text-gray-600 group hover:text-black lg:flex hidden'>{item.title}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DashboardSidebar;