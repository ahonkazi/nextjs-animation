"use client"
import { GetThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'
import { IoCloseOutline } from "react-icons/io5";
const Menu = () => {
    const themeContext = useContext(GetThemeContext)
    return (
        <>
            {themeContext.menuStatus && (
                <div className='h-screen site-container fixed flex-col top-0 left-0 w-full bg-white flex items-center justify-center'>
                    <div className="w-full site-mt shrink-0 flex justify-end">
                        <button className='text-[40px] text-black'> <IoCloseOutline /></button>
                    </div>
                    <div className="h-full">
                        <div className="group relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                            <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>About</h1>
                            <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>About</h1>
                        </div>
                        <div className="group relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                            <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Services</h1>
                            <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Services</h1>
                        </div>
                        <div className="group relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                            <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Portfolio</h1>
                            <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Portfolio</h1>
                        </div>
                        <div className="group relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                            <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Contact Us</h1>
                            <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Contact Us</h1>
                        </div>
                    </div>

                </div>
            )}
        </>

    )
}

export default Menu