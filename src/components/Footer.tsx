import React from 'react'
import SubHeading from './SubHeading'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className='lg:w-[80%] md:w-[95%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-6 gap-3  justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Contact Us" />
                    <h2 className='text-6xl font-mono text-center'>Get In Touch</h2>
                </div>

                <div className='w-full h-auto flex justify-between items-center py-2'>
                    <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                        <h2 className='lg:text-4xl  sm:text-3xl xs:text-2xl text-xl text-foreground font-mono text-center border-b-8 border-primary w-fit'>Schedule Your Consultation Today</h2>
                        <p className=' text-foreground max-w-2xl text-lg'>
                            Don’t face your legal challenges alone. Contact Vanguard Legal Group to schedule a consultation and take the first step toward resolving your legal matter.
                        </p>
                        <div className="foot w-full h-auto py-3 text-2xl flex gap-5 justify-start">
                            <FaFacebook />
                            <FaXTwitter />
                            <FaLinkedin />
                            <FaWhatsapp />
                            <FaInstagram />
                        </div>
                    </div>

                    <div className='w-[305px] h-[314px] flex flex-col gap-4 bg-foreground rounded-2xl p-6'>
                        <div className='flex flex-col gap-4 w-full h-auto'>
                            <h4 className='text-3xl text-secondary w-full h-auto font-mono'>
                                Office Hours:
                            </h4>
                            <p className='text-base text-secondary font-sans'>
                                Monday to Friday: 9 AM – 5 PM Saturday: By Appointment Only
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 w-full h-auto'>
                            <h4 className='text-3xl text-secondary w-full h-auto font-mono'>
                                Contact Details:
                            </h4>
                            <ul className='text-base flex flex-col gap-1 list-disc text-secondary font-sans'>
                                <li>Phone: [Your Phone Number]</li>
                                <li>Email: contact@[YourDomain].com</li>
                                <li>Address: [Your Address]</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex copyright w-full h-auto justify-center items-center'>
                    <p className='text-base font-sans'>
                        © 2021 all copyright reserved. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
