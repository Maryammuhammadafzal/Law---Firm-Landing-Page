import Header from '@/components/Header'
import HeroCard from '@/components/HeroCard'
import React from 'react'

const HeroPage = () => {
  return (
    <div className="w-full sm:h-screen xs:h-[600px] h-[500px] flex flex-col gap-7 justify-center items-center overflow-hidden">
      <div
        className="relative w-full h-screen bg-right-bottom  md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-image.png')` }}
      >
        <div className="absolute w-fit min-h-[400px] sm:top-30 xs:bottom-10 -bottom-20 sm:left-30 right-0  z-30">
                <HeroCard/>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
