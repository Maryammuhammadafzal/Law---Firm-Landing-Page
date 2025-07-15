import { Card, CardContent } from "@/components/ui/card";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";

const TeamPage = () => {
    let choose_data = [
        {
            name: "John Doe, Esq.",
            image: '/images/team-image1.jpg',
            description:
                "Founder and Managing Partner with over 20 years of experience in corporate and criminal law. John is known for his strategic acumen and relentless advocacy.",
        },
        {
            name: "John Doe, Esq.",
            image: '/images/team-image1.jpg',
            description:
                "Founder and Managing Partner with over 20 years of experience in corporate and criminal law. John is known for his strategic acumen and relentless advocacy.",
        },
        {
            name: "John Doe, Esq.",
            image: '/images/team-image1.jpg',
            description:
                "Founder and Managing Partner with over 20 years of experience in corporate and criminal law. John is known for his strategic acumen and relentless advocacy.",
        },
        {
            name: "John Doe, Esq.",
            image: '/images/team-image1.jpg',
            description:
                "Founder and Managing Partner with over 20 years of experience in corporate and criminal law. John is known for his strategic acumen and relentless advocacy.",
        },

    ];

    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7 py-4'>
            <div className='lg:w-[80%] md:w-[95%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Why Us" />
                    <h2 className='lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-mono text-center'>Why Choose Us</h2>
                </div>

                <Carousel className="w-full md:p-6 p-3">
                    <CarouselContent>
                        {choose_data.map(({ name, description, image }, index) => (
                            <CarouselItem className="">
                                <Card
                                    key={index}
                                    className="w-[99%] shadow-none p-0 border-none relative h-auto flex justify-center items-center bg-transparent"
                                >
                                    <CardContent className="flex p-0 flex-col sm:flex-row md:gap-10 sm:gap-6 gap-3 items-center justify-between w-full h-full">

                                        <div className="flex flex-col gap-3 justify-center md:pr-5 w-auto  h-full">
                                            <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                                                <h2 className='lg:text-4xl  sm:text-3xl xs:text-2xl text-xl text-foreground font-mono text-center border-b-8 border-primary w-fit'>{name}</h2>
                                            </div>
                                            <p className=' text-foreground lg:max-w-3xl md:max-w-2xl sm:max-w-xl xs:max-w-md max-w-xs md:text-base sm:text-sm text-xs'>
                                                {description}
                                            </p>
                                            <div className="foot w-full h-auto py-3 flex justify-start">
                                                <Button className='bg-transparent  px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>Read more</Button>
                                            </div>


                                            <div className="w-[20px] h-auto flex gap-3 absolute md:top-10 top-4 md:left-20 right-4 ">
                                                <CarouselPrevious ><MoveLeftIcon size={30} /></CarouselPrevious>
                                                <CarouselNext ><MoveRightIcon size={30} /></CarouselNext>

                                            </div>

                                        </div>

                                        <div className="sm:w-[380px]  lg:h-[450px] md:h-[400px] h-[350px] rounded-[40px]">
                                            <Image src={image} alt="team-image" width={78} height={55} className="w-full h-full object-cover rounded-[40px]" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


            </div>
        </div>
    );
};

export default TeamPage;