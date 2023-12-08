import React from 'react'

export const SlideText = ({ children }) => {
    return (
        <div className="group relative overflow-hidden select-none font-semibold text-black uppercase">
            <h1 className='group-hover:-translate-y-[120%] duration-500 transition ease-in-out'>{children}</h1>
            <h1 className='absolute top-0 left-0 group-hover:translate-y-[0] duration-500 transition ease-in-out group-hover:rotate-0 translate-y-[120%] rotate-12'>{children}</h1>
        </div>
    )
}

