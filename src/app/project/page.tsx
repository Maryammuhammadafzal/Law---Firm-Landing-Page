import SubHeading from '@/components/SubHeading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProjectPage = () => {
    const project_data = [
        {
            title: 'Corporate Acquisition Case:',
            desciption: ' Successfully guided a major corporation through a complex acquisition process, ensuring compliance and seamless integration.',
            image: '/images/project-image1.jpg'
        },
        {
            title: 'High-Profile Criminal Defense:',
            desciption: 'Defended a client in a nationally publicized case, resulting in a full acquittal.',
            image: '/images/project-image2.jpg'
        },

    ]
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7 py-4'>
            <div className='lg:w-[85%] md:w-[95%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Our Projects" />
                    <h2 className='lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-mono text-center'>Recent Success Stories</h2>
                </div>
                <div className='flex flex-col w-full py-6 h-auto gap-8'>
                    {
                        project_data.map((project, index) => (
                            <div key={index} className='w-full h-auto flex md:flex-row flex-col justify-between gap-3'>
                                {/* Content */}
                                <div className='flex flex-col gap-3 md:max-w-xl w-full'>
                                    <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                                        <h2 className='xl:text-4xl  lg:text-3xl xs:text-2xl text-xl text-foreground font-mono border-b-8 border-primary w-fit'>{project.title}</h2>
                                    </div>
                                    <p className='xl:max-w-2xl lg:max-w-xl md:max-w-lg sm:max-w-sm max-w-xs text-foreground md:text-base sm:txet-sm text-xs'>
                                        {project.desciption}
                                    </p>
                                    <div className="foot w-full h-auto py-3 flex justify-start">
                                        <Button className='bg-transparent px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>Read Case</Button>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className='md:w-[480px] w-full h-[250px] rounded-3xl flex justify-center items-center'>
                                    <Image src={project.image} alt="quote-icon" width={78} height={55} className="w-full h-full object-cover rounded-3xl" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="foot w-full h-auto py-3 flex justify-center items-center" >
                    <Button className='bg-transparent px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>See All Projects</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
