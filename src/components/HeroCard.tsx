import React from 'react'
import { Button } from './ui/button'

const HeroCard = () => {
    return (
        <div className='w-[510px] p-2 h-[510px] flex justify-center items-center '>
            <div className='w-full h-full flex justify-start items-center border-2 border-primary relative rounded-br-[40px]'>
                <div className='w-[505px] h-[500px] bg-primary flex flex-col absolute -top-7 -left-7 justify-center rounded-br-[40px] gap-3 p-6'>
                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl leading-14 font-mono text-secondary'>Advocating for Justice, Empowering Clients</h1>
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
