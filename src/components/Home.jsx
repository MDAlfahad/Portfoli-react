import React from 'react'
import {FaLinkedinIn, FaTwitter, } from 'react-icons/fa'
import { FaWhatsapp, } from 'react-icons/fa6'

const Home = () => {
  return (
    <div id='home' className='md:flex justify-between  py-10 md:px-8 lg:px-14'>
        <div className='flex flex-col text-center md:text-left sm:mt-[5%] md:mt-[30%] lg:mt-[35%]'>
            <h1 className='text-xl md:text-2xl lg:text-3xl text-[#829873] font-bold '>SHRISTI SINGH</h1>
        </div>
        <div className="links text-[#829873] flex gap-6 text-4xl md:mt-[35%]">
            <a className='hover:text-[#FFC60A]' href="https://x.com/i_mShristisingh?s=08" target='_blank'>< FaTwitter/></a>
            <a className='hover:text-[#FFC60A]' href="#" target='_blacnk'>< FaLinkedinIn/></a>
            <a className='hover:text-[#FFC60A]' href="https://chat.whatsapp.com/BCrgF5EWknX2afFJ6RXj45?mode=ac_t" target='_blank'>< FaWhatsapp/></a>
        </div>
    </div>
  )
}

export default Home