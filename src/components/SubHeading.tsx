import React from 'react'

const SubHeading = () => {
    return (
        <div className='flex gap-2 h-auto items-center w-auto'>
            <div className='w-2 h-2 bg-foreground rounded-full'></div>
            <h3 className='sm:text-xl xs:text-lg text-sm list-disc font-sans'>
                Our Expertise
            </h3>
        </div>
    )
}

export default SubHeading
