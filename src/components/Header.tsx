'use client'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isOPen, setIsOpen] = useState(false);
    useEffect(()=> {
      if(window.innerWidth < 640) {
        setIsOpen(false)
      }
    }, [])
    return (
        <div className='w-full sm:h-[100px] h-auto bg-secondary flex flex-col relative justify-center items-center'>
            <div className='sm:w-auto w-[98%] flex sm:justify-center justify-between items-center gap-3 h-auto'>
                <nav className='w-auto h-auto sm:flex hidden justify-center items-center'>
                    <ul className='w-auto h-auto flex lg:gap-5 md:gap-3 gap-2 lg:text-lg md:text-base sm:text-sm text-xs font-sans justify-center items-center'>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Home</li>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>About us</li>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Expertise</li>
                    </ul>
                </nav>

                <Link href='/' className='w-auto h-auto xl:mx-14 lg:mx-10 md:mx-7 sm:mx-4 mx-0 my-3'>
                    <Image src='/images/logo.png' alt='logo' width={137} height={71} className='' />
                </Link>

                <nav className='w-auto h-auto sm:flex hidden justify-center items-center'>
                    <ul className='w-auto h-auto flex lg:gap-5 md:gap-3 gap-2 lg:text-lg md:text-base sm:text-sm text-xs font-sans justify-center items-center'>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Project</li>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Team</li>
                        <li className='md:p-2 sm:p-1 p-0 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Contact us</li>
                    </ul>
                </nav>
                <div className='menu-icon w-fit h-fit sm:hidden flex justify-center items-center'>
                    <MenuIcon onClick={() => setIsOpen(!isOPen)} />
                </div>
            </div>
            <nav className={`justify-center sm:hidden absolute top-0 left-0 z-50 items-center w-full transition-transform ${isOPen ? 'translate-y-[95px] h-[300px] flex' : 'translate-y-0 h-[0px] hidden'} duration-1000 bg-secondary py-3`}>
                <ul className='w-full h-full flex gap-2 text-base font-sans justify-start items-center flex-col'>
                    <li className='border-b border-primary w-full py-1 px-3'>Home</li>
                    <li className='border-b border-primary w-full py-1 px-3'>About us</li>
                    <li className='border-b border-primary w-full py-1 px-3'>Expertise</li>
                    <li className='border-b border-primary w-full py-1 px-3'>Projects</li>
                    <li className='border-b border-primary w-full py-1 px-3'>Team</li>
                    <li className=' w-full py-1 px-3'>Contact us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
