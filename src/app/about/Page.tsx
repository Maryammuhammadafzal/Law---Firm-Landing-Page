import SubHeading from '@/components/SubHeading'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className=' w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Who we are" />
                    <h2 className='text-6xl font-mono text-center'>About Our Firm</h2>
                </div>
                <div className='w-full h-auto flex justify-center items-center bg-center bg-fixed bg-cover' style={{ backgroundImage: `url('/images/about-bg.png')` }}>
                    <div className='flex justify-center max-w-2xl gap-3 items-center w-full h-[450px] flex-col'>
                        <h4 className='text-5xl text-secondary font-mono  text-center capitalize'>Who we are</h4>
                        <p className='text-base text-secondary text-center'>Vanguard Legal Group is a dedicated team of legal professionals driven by a commitment to justice and client success. With years of experience across various legal disciplines, we have built a reputation for excellence and integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
