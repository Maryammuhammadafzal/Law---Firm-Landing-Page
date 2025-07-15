import React from 'react'
import { Button } from './ui/button'

const HeroCard = () => {
    return (
        <div className='md:w-[505px] md:h-[500px] xs:w-[410px] xs:h-[400px] w-[310px] h-[300px] p-2 flex justify-center items-center '>
            <div className='w-full h-full flex justify-start items-center border-2 border-primary relative rounded-br-[40px]'>
                <div className='md:w-[505px] md:h-[500px] xs:w-[410px] xs:h-[400px] w-[310px] h-[300px] bg-primary flex flex-col absolute -top-7 -left-7 justify-center rounded-br-[40px] gap-3 p-6'>
                    <h1 className='md:text-5xl xs:text-4xl text-3xl md:leading-14 xs:leading-10 leading-8 font-mono text-secondary'>Advocating for Justice, Empowering Clients</h1>
                    <p className='xl:text-xl lg:text-lg md:text-base text-sm font-sans font-normal text-secondary'>
                        At Vanguard Legal Group, we are committed to providing exceptional legal representation and personalized counsel.
                    </p>
                    <div className='py-3'>
                        <Button className='bg-none px-10 border border-white text-white text-sm font-sans rounded-full'>Book Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
