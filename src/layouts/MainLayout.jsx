import Header from '@/components/Header'
import Menu from '@/components/Menu'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <>
            <Menu />
            {
                children
            }
        </>
    )
}

export default MainLayout