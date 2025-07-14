import Header from '@/components/Header'
import HeroCard from '@/components/HeroCard'
import React from 'react'

const HeroPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-7 justify-center items-center overflow-hidden md:mb-16 sm:mb-12 mb-6">
      <div
        className="relative w-full h-screen bg-left-top sm:bg-left-bottom md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-image.png')` }}
      >
        <div className="absolute w-full min-h-[400px] flex justify-center items-center z-30">
                <HeroCard/>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
