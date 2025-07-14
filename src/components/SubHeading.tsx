import React from 'react'

type SubHeadingProp = {
 title : string;
}
const SubHeading = ({title}: SubHeadingProp) => {
    return (
        <div className='flex gap-2 h-auto items-center w-auto'>
            <div className='w-2 h-2 bg-foreground rounded-full'></div>
            <h3 className='sm:text-xl capitalize xs:text-lg text-sm list-disc font-sans'>
                {title}
            </h3>
        </div>
    )
}

export default SubHeading
