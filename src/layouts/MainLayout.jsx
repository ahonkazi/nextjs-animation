"use client"
import Menu from '@/components/Menu'
import Header from '@/components/header/Header'
import SmoothScrolling from '@/components/utils/SmoothScrolling'
import { GetThemeContext } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

const MainLayout = ({ children }) => {
    const themeContext = useContext(GetThemeContext)
    return (
        <>

            <SmoothScrolling>

                <Header />

                < Menu />

                {
                    children
                }
            </SmoothScrolling >
        </>

    )
}

export default MainLayout