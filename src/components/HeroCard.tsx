import React from 'react'
import { Button } from './ui/button'

const HeroCard = () => {
    return (
        <div className='md:w-[505px] md:h-[500px] xs:w-[400px] xs:h-[390px] w-[280px] h-[270px] p-2 flex justify-center items-center '>
            <div className='w-full h-full flex justify-start items-center border-2 border-primary relative rounded-br-[40px]'>
                <div className='md:w-[505px] md:h-[500px] xs:w-[400px] xs:h-[390px] w-[280px] h-[270px] bg-primary flex flex-col absolute -top-7 -left-7 justify-center rounded-br-[40px] gap-3 p-6'>
                    <h1 className='md:text-5xl sm:text-4xl xs:text-3xl text-2xl md:leading-14 sm:leading-10 xs:leading-8 leading-6 font-mono text-secondary'>Advocating for Justice, Empowering Clients</h1>
                    <p className='xl:text-xl lg:text-lg md:text-base xs:text-sm text-xs font-sans font-normal text-secondary'>
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
