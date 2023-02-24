import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    const menuItem = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <header className='flex justify-between px-5 py-2 bg-gray-900 text-white'>
            <a href="/" className='text-2xl font-bold'>Habib</a>

            {/* Search */}
            <div className='flex items-center search'>
             <AiOutlineSearch/>
                <input type="text" placeholder='Search anythings...' className='outline-none ml-1 bg-gray-900'/>
            </div>

            {/* Desktop Navbar */}
            <nav className='hidden lg:block'>
                <ul className='flex'>
                    {menuItem}
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
                <ul className='flex flex-col'>
                    {menuItem}
                </ul>
            </nav>

            {/* Toggle Button */}
            <button onClick={handleToggle} className='block lg:hidden'>
                {!toggle ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </button>

        </header>
    );
};

export default Header;