import React from 'react'
import { Button } from './ui/button'

const HeroCard = () => {
    return (
        <div className='w-[510px] p-2 h-[543px] flex justify-center items-center '>
            <div className='w-full h-full border-2 border-secondary relative rounded-br-[40px]'>
                <div className='w-[505px] h-[535px] bg-secondary flex flex-col absolute -top-5 -left-5 rounded-br-[40px] gap-3 p-3'>
                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-mono'>Advocating for Justice, Empowering Clients</h1>
                    <p className='xl:text-xl lg:text-lg md:text-base text-sm font-sans'>
                        At Vanguard Legal Group, we are committed to providing exceptional legal representation and personalized counsel.
                    </p>
                    <Button className='bg-none border border-white text-white text-sm font-sans rounded-full'>Book Now</Button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
