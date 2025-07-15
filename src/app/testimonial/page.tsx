'use client'
import SubHeading from '@/components/SubHeading'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const TestimonialPage = () => {
    let [active, setActive] = useState(0)

    const testimonial_data = [
        {
            id: 0,
            title: 'Family Custody Battle',
            testimonial: '"Vanguard Legal Group helped me through a difficult divorce with professionalism and care. I couldn’t have asked for better representation."',
            name: 'Sarah T.',
            image: '/images/client-image1.png'
        },
        {
            id: 1,
            title: 'Corporate Acquisition Case',
            testimonial: '"Their legal strategy during our corporate acquisition was flawless."',
            name: 'James R.',
            image: '/images/client-image1.png'
        },
        {
            id: 2,
            title: 'High-Profile Criminal Defense',
            testimonial: '"I felt truly defended and supported throughout the trial."',
            name: 'Michael D.',
            image: '/images/client-image1.png'
        },
        {
            id: 3,
            title: 'Personal Injury Settlement',
            testimonial: '"They negotiated a fair settlement faster than I expected."',
            name: 'Lisa K.',
            image: '/images/client-image1.png'
        },
    ];

    const activeTestimonial = testimonial_data.find((item) => item.id === active);

    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className='w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Testimonials" />
                    <h2 className='text-6xl font-mono text-center'>What talk about us</h2>
                </div>

                <div className='w-full h-auto bg-secondary py-10 flex justify-center items-center'>
                    <div className="w-[90%] flex gap-6 ">
                        <ul className='w-[35%] h-auto flex flex-col gap-6'>
                            {testimonial_data.map(({ title }, index) => (
                                <li key={index} onClick={() => setActive(index)} className={`text-2xl font-sans cursor-pointer transition-colors duration-300 ${active === index ? 'text-black font-semibold' : 'text-black/50 hover:text-black'
                                    }`}>{title}</li>
                            ))}
                        </ul>
                        {activeTestimonial && (
                            <div key={activeTestimonial.id} className='flex flex-col gap-6 w-[55%] h-auto'>
                                <p className='text-[40px] font-mono pb-4 border-b border-foreground'>{activeTestimonial.testimonial}</p>
                                <div className='w-full flex justify-between items-center gap-3 h-auto'>
                                    <div className="profile flex gap-3 items-center">
                                        <Image src={activeTestimonial.image} alt='client Image' width={90} height={90} className='rounded-full' />
                                        <h3 className='text-3xl font-mono'>{activeTestimonial.name}</h3>
                                    </div>
                                    <div className='case-name w-auto h-auto px-3'>
                                        <p className='text-xl '>
                                            Case: {activeTestimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
