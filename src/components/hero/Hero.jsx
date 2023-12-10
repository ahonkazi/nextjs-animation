"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'
import './Hero.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.to('.text-item', {
                y: 0, stagger: {
                    amount: 0.4
                }
            })
            tl.to('.textSlideItem', { opacity: 1, y: 0, duration: 0.4 })
            gsap.to('.WidthAnimation', {
                scrollTrigger: '.triggerPoint',
                width: 'auto',
                duration: 0.4,
                delay: 0.8

            })

        });
        return () => ctx.revert();
    }, [])
    return (
        <div className='site-container'>

            <div className="text-center uppercase text-[130px] font-normal leading-[100%]">
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
                    <h1 className='text-item translate-y-full'><span className='text-orange'>by loving</span> your</h1>
                </div>
                <div className="flex items-center justify-center gap-8">
                    <div className="relative ">
                        <div className="overflow-hidden">
                            <h1 className='text-item translate-y-full'>audience</h1>
                        </div>
                        <div className="absolute rotate-6 WidthAnimation overflow-hidden w-0 top-full translate-y-0 left-0">
                            <div className="bg-purple whitespace-nowrap text-[90px] font-bold tracking-wide px-4  w-fit text-white">
                                <h1 className=''>Like crazy</h1>
                            </div>
                            <div className="triggerPoint"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden text-slide font-Nunito select-none">
                        <div className="overflow-hidden textSlideItem opacity-0 translate-y-full px-4 py-2 group  rounded-full border-black   border  w-[200px]">
                            <div className="whitespace-nowrap text-sm  flex items-center">
                                <span className='animate-LoopLeft group-hover:pause'>
                                    show reel 2023 &copy;
                                </span>
                                <span className='animate-LoopLeft group-hover:pause'>
                                    show reel 2023 &copy;
                                </span>
                                <span className='animate-LoopLeft group-hover:pause'>
                                    show reel 2023 &copy;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Hero