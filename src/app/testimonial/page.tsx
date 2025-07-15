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
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7 py-4'>
            <div className='w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Testimonials" />
                    <h2 className='lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-mono text-center'>What talk about us</h2>
                </div>

                <div className='w-full h-auto bg-secondary py-10 flex justify-center items-center'>
                    <div className="lg:w-[90%] xs:w-[98%] w-full flex sm:gap-6 gap-3">
                        <ul className='w-[35%] h-auto flex flex-col sm:gap-6 gap-3'>
                            {testimonial_data.map(({ title }, index) => (
                                <li key={index} onClick={() => setActive(index)} className={`xl:text-2xl lg:text-xl md:text-lg sm:text-sm xs:text-xs text-[10px] font-sans cursor-pointer transition-colors duration-300 ${active === index ? 'text-black font-semibold' : 'text-black/50 hover:text-black'
                                    }`}>{title}</li>
                            ))}
                        </ul>
                        {activeTestimonial && (
                            <div key={activeTestimonial.id} className='flex flex-col gap-6 lg:w-[55%] w-[60%] h-auto'>
                                <p className='xl:text-[40px] lg:text-4xl md:text-3xl sm:text-xl xs:text-base text-xs font-mono pb-4 border-b border-foreground'>{activeTestimonial.testimonial}</p>
                                <div className='w-full flex max-xs:flex-wrap justify-between items-center gap-3 h-auto'>
                                    <div className="profile flex gap-3 items-center">
                                        <Image src={activeTestimonial.image} alt='client Image' width={90} height={90} className='rounded-full lg:h-[90px] lg:w-[90px] sm:w-[70px] sm:h-[70px] w-[50px] h-[50px]' />
                                        <h3 className='xl:text-3xl lg:text-2xl md:text-lg sm:text-base text-sm font-mono'>{activeTestimonial.name}</h3>
                                    </div>
                                    <div className='case-name xs:w-auto w-full justify-end max-xs:flex h-auto md:px-3 px-1'>
                                        <p className='xl:text-xl lg:text-base md:text-sm sm:text-xs text-[10px]'>
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
