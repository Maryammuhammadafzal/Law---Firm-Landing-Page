'use client'
import SubHeading from '@/components/SubHeading'
import Image from 'next/image'
import React, { useState } from 'react'

const TestimonialPage = () => {
    let [active, setActive] = useState(0)
    let testimonial_data = [
        {
            title: 'Family Custody Battle',
            testimonial: '"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."',
            name: 'Sarah T.',
            image: '/images/client-image.jpg'

        },
        {
            title: 'Corporate Acquisition Case',
            testimonial: '"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."',
            name: 'Sarah T.',
            image: '/images/client-image.jpg'

        },
        {
            title: 'High-Profile Criminal Defense',
            testimonial: '"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."',
            name: 'Sarah T.',
            image: '/images/client-image.jpg'

        },
        {
            title: 'Personal Injury Settlement',
            testimonial: '"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."',
            name: 'Sarah T.',
            image: '/images/client-image.jpg'

        },
    ]
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className='w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Testimonials" />
                    <h2 className='text-6xl font-mono text-center'>What talk about us</h2>
                </div>

                <div className='w-full h-auto bg-secondary py-10 flex justify-center items-center'>
                    <div className="w-[85%] flex gap-6 ">
                        <ul className='w-[30%] h-auto flex flex-col gap-6'>
                            {testimonial_data.map(({ title }, index) => (
                                <li key={index} onClick={() => setActive(index)} className='text-2xl font-sans text-black/50 focus:text-black hover:text-black active:text-black'>{title}</li>
                            ))}
                        </ul>
                        <div className='flex flex-col gap-6 w-[60%] h-auto'>
                            <p className='text-[40px] font-mono py-4 border-b border-foreground'>"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."</p>
                            <div className='w-full flex justify-between items-center gap-3 h-auto'>
                                <div className="profile flex gap-3 items-center">
                                    <Image src='/images/client-image1.jpg' alt='client Image' width={90} height={90} className='rounded-full' />
                                    <h3 className='text-3xl font-mono'>Sarah T.</h3>
                                </div>
                                <div className='case-name w-auto h-auto px-3'>
                                    <p className='text-xl '>
                                        Case: Family Custody Battle
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
