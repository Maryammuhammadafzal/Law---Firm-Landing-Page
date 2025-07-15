import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[100px] bg-secondary flex justify-center items-center'>
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
                <div className='menu-icon w-fit h-fit flex justify-center items-center'>
                    <MenuIcon/>
                </div>
            </div>
        </div>
    )
}

export default Header
