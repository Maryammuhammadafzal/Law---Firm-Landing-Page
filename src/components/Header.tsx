import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[100px] bg-secondary flex justify-center items-center'>
            <div className='w-auto flex justify-center items-center gap-3 h-auto'>
                <nav className='w-auto h-auto flex justify-center items-center'>
                    <ul className='w-auto h-auto flex lg:gap-5 md:gap-3 gap-2 text-lg font-sans justify-center items-center'>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Home</li>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>About us</li>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Expertise</li>
                    </ul>
                </nav>

                <Link href='/' className='w-auto h-auto xl:mx-14 lg:mx-12 md:mx-9 sm:mx-6 mx-3 my-3'>
                    <Image src='/images/logo.png' alt='logo' width={137} height={71} className='' />
                </Link>

                <nav className='w-auto h-auto flex justify-center items-center'>
                    <ul className='w-auto h-auto flex lg:gap-5 md:gap-3 gap-2 text-lg font-sans justify-center items-center'>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Project</li>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Team</li>
                        <li className='p-2 hover:border-b-4 border-primary focus:border-b-4 active:border-b-4'>Contact us</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
