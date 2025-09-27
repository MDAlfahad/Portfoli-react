import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {


    const toggleMenu = () => document.getElementById('mobile-menu').classList.toggle('hidden');

    return (
        <div className='flex px-4 py-2 justify-between items-center md:px-5 bg-[#F0FBF1]'>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold ">LOGO</div>
            <nav className='hidden text-[#829873] md:flex gap-4 md:gap-8 md:text-[16px] lg:gap-12 lg:text-lg'>
                <a className='hover:text-[#FFC60A]' href="home">Home</a>
                <a className='hover:text-[#FFC60A]' href="about">About Me</a>
                <a className='hover:text-[#FFC60A]' href="#">Favourate Places</a>
                <a className='hover:text-[#FFC60A]' href="#">Contact</a>
            </nav>
            <button className='hidden md:block bg-[#829873] text-white px-6 py-2 font-semibold rounded-full hover:bg-[#FFC60A]'>Join</button>

            {/* mobile responsive icon */}
            <button className='md:hidden text-2xl' onClick={toggleMenu}>
                <FaBars />
            </button>

            {/* mobile menu */}
            <div id='mobile-menu' className='absolute top-0 left-0 w-full h-screen bg-white z-50 hidden'>


                <div className='absolute top-4 right-4'>
                     <button onClick={toggleMenu}>
                        <FaTimes className='text-3xl text-gray-700'/>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center h-full gap-5'>
                    <a className='py-2 text-lg hover:text-[#FFC60A]' href="#">Home</a>
                    <a className='py-2 text-lg hover:text-[#FFC60A]' href="#">About Me</a>
                    <a className='py-2 text-lg hover:text-[#FFC60A]' href="#">Favourate Places</a>
                    <a className='py-2 text-lg hover:text-[#FFC60A]' href="#">Contact</a>
               
                    <button className='bg-[#829873] text-white px-6 py-2 font-semibold rounded-full hover:bg-[#FFC60A]'>Join</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

