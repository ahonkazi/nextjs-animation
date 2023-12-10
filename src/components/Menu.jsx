"use client"
import { GetThemeContext } from '@/context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react'
import { IoCloseOutline } from "react-icons/io5";
const Menu = () => {
    const themeContext = useContext(GetThemeContext)
    const load = () => {
        let ctx = gsap.context(() => {
            gsap.from('.menu-item', { x: '-100%', stagger: { amount: 0.3 }, yoyo: true })
        });
        return () => ctx.revert();
    }
    useEffect(() => {
        if (themeContext.menuStatus) {
            load()
        }
    }, [themeContext.menuStatus]);

    return (
        <AnimatePresence>
            {
                themeContext.menuStatus && (
                    <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='h-screen site-container z-[100] fixed flex-col top-0 left-0 w-full bg-white flex items-center justify-center'>
                        <div className="w-full site-mt shrink-0 flex justify-end">
                            <button onClick={() => themeContext.setMenuStatus(false)} className='text-[40px] text-black'> <IoCloseOutline /></button>
                        </div >
                        <div className="h-full">
                            <div className="group menu-item relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                                <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>About</h1>
                                <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>About</h1>
                            </div>
                            <div className="group menu-item relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                                <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Services</h1>
                                <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Services</h1>
                            </div>
                            <div className="group menu-item relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                                <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Portfolio</h1>
                                <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Portfolio</h1>
                            </div>
                            <div className="group menu-item relative overflow-hidden text-[70px] select-none font-semibold text-black uppercase">
                                <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>Contact Us</h1>
                                <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>Contact Us</h1>
                            </div>
                        </div>
                    </motion.div >
                )
            }
        </AnimatePresence>
    )
}

export default Menu