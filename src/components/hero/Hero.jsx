"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

const Hero = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.text-item', {
                y: 0, stagger: {
                    amount: 0.4
                }
            })
        });
        return () => ctx.revert();
    }, [])
    return (
        <div className='site-container'>

            <div className="text-center text-[130px] font-normal leading-[100%]">
                <div className="overflow-hidden">
                    <h1 className='text-item translate-y-full'>you can only</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className='text-item translate-y-full'>build brands</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className='text-item translate-y-full'>people love</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className='text-item translate-y-full'>by loving your</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className='text-item translate-y-full'>audience</h1>
                </div>
            </div>

        </div>
    )
}

export default Hero