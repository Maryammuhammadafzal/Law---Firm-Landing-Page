import SubHeading from '@/components/SubHeading'
import { Button } from '@/components/ui/button'
import React from 'react'

const ExpertisePage = () => {
    const expertise_data = [
        {
            title: 'Corporate Law',
            description: 'Navigating the complexities of business law with precision and expertise. From contract negotiation to mergers and acquisitions, we provide strategic legal solutions to help your business thrive.',
            year: '2000-2024',
        },
        {
            title: 'Real Estate Law',
            description: 'Ensuring smooth and secure property transactions. Our team handles everything from lease agreements to property disputes with expertise and care.',
            year: '2000-2024',
        },
        {
            title: 'Criminal Defense',
            description: 'Protecting your rights and freedom. Our seasoned attorneys defend against charges ranging from misdemeanors to serious felonies with dedication and skill.',
            year: '2000-2024',
        },
        {
            title: 'Estate Planning',
            description: 'Providing peace of mind for your future. We assist with wills, trusts, and probate to safeguard your assets and ensure your wishes are honored.',
            year: '2000-2024',
        },
    ]
    return (
        <div className='w-full bg-secondary h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7 py-4'>
            <div className='lg:w-[75%] md:w-[85%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title='Our Expertise' />
                    <h2 className='lg:text-6xl sm:text-5xl text-4xl font-mono text-center'>Legal Specialties</h2>
                </div>
                <div className='w-full h-auto gap-4 flex flex-col'>
                    {
                        expertise_data.map((data, index) => (
                            <div key={index} className={`w-full h-auto flex justify-between py-5 border-foreground ${index === expertise_data.length-1 ? 'border-b-0' : 'border-b' }`}>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-mono text-center border-b-8 border-primary w-fit'>{data.title}</h2>
                                    <p className='xl:max-w-3xl max-w-2xl md:text-base sm:text-sm text-xs'>
                                        {data.description}
                                    </p>
                                </div>
                                <div className='w-auto h-auto'>
                                    <p className='xl:text-2xl lg:text-xl md:text-lg w-[120px] font-medium'>{data.year}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="foot w-full h-auto py-3 flex justify-end">
                    <Button className='bg-transparent px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>See all</Button>
                </div>
            </div>
        </div>
    )
}

export default ExpertisePage
