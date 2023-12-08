"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SlideText } from '../typography/Typography'
import { MainLogo } from '../icons/icons'
import gsap from 'gsap'
import './Header.scss'
import { GetThemeContext } from '@/context/ThemeContext'
const Header = () => {
    const logoRef = useRef()
    const themeContext = useContext(GetThemeContext)
    const logoEnter = () => {
        const currentColor = logoRef.current.getAttribute('data-color');
        const logoSvg = logoRef.current.firstChild.firstChild;
        const nextColor =
            currentColor === '#a6e2e3'
                ? '#8566f6'
                : currentColor === '#8566f6'
                    ? '#ed7c50'
                    : '#a6e2e3';
        logoRef.current.setAttribute('data-color', nextColor);
        gsap.to(logoSvg, {
            fill: nextColor,
            duration: 0.2,
            ease: 'power1.out',
        });
    }
    const logoLeave = () => {
        const logoSvg = logoRef.current.firstChild.firstChild;
        gsap.to(logoSvg, {
            fill: '#282829',
            duration: 0.2,
            ease: 'power1.out',
        });
    }
    const headerRef = useRef()
    const [headerScrolled, serHeaderScrolled] = useState(false)
    useEffect(() => {
        let currentScroll = 0;
        if (headerRef !== null) {
            window.addEventListener('scroll', () => {
                // if (window.scrollY > headerRef?.current.clientHeight) {
                headerRef?.current.classList.add('header-sticky')
                if (currentScroll > window.scrollY) {
                    headerRef.current.classList.add('header-scrolled')
                    serHeaderScrolled(true)

                } else {
                    headerRef.current.classList.remove('header-scrolled')
                    serHeaderScrolled(false)

                }
                currentScroll = window.scrollY;
            })
        }
    }, [])

    return (
        <header ref={headerRef} className='flex  bg-white py-[50px] justify-between site-container '>
            <div onClick={() => themeContext.setMenuStatus(true)} className="">
                <SlideText><span className='text-[24px]'>MENU</span></SlideText>
            </div>
            <div onMouseEnter={logoEnter} onMouseLeave={logoLeave} ref={logoRef} data-color="#a6e2e3" className="[&>svg]:h-10 lg:[&>svg]:h-16  [&>svg]:duration-500 [&>svg]:ease-out [&>svg]:hover:h-20">
                <MainLogo />
            </div>
            <div className="">
                <SlideText><span className='text-[24px]'>Contact</span></SlideText>
            </div>
        </header>
    )
}

export default Header