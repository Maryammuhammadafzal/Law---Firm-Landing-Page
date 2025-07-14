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

const ChoosePage = () => {
    let team_data = [
        {
            title: "Experienced Attorneys",
            quote: "Schedule a free initial consultation to discuss your legal needs and goals.",
            description:
                "Our team comprises seasoned legal professionals with a proven track record of success in various legal fields.",
        },
        {
            image: "/images/team-image2.jpg",
            name: "James Carter",
            profession: "Chief Technology Officer (CTO)",
            about:
                "James is the tech wizard behind our cutting-edge solutions. With expertise in multiple programming languages and systems architecture, he ensures our technology stack remains top-notch and future-ready.",
        },
        {
            image: "/images/team-image3.jpg",
            name: "Emily Rodriguez",
            profession: "Project Manager",
            about:
                "Emily brings projects to life with meticulous planning and coordination. Her focus on communication and detail ensures every project is delivered on time and exceeds client expectations.",
        },
        {
            image: "/images/team-image4.jpg",
            name: "Daniel Lee",
            profession: "Lead Developer",
            about:
                "Daniel is the backbone of our development team, specializing in crafting scalable and robust applications. His dedication to clean code and innovative solutions drives the success of our projects.",
        },
        {
            image: "/images/team-image5.jpg",
            name: "Mia Patel",
            profession: "UI/UX Designer",
            about:
                "Mia designs intuitive and visually stunning user interfaces. Her creativity and focus on user experience make every project not only functional but also delightful to use.",
        },
    ];

    return (
        <div className='w-full bg-secondary h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className='lg:w-[70%] md:w-[85%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Why Us" />
                    <h2 className='text-6xl font-mono text-center'>Why Choose Us</h2>
                </div>

                <Carousel className="w-full md:p-6 p-3">
                    <CarouselContent>
                        {team_data.map(({ name, about, image, profession }, index) => (
                            <CarouselItem className="">
                                <Card
                                    key={index}
                                    className="w-full p-0 border-none h-auto flex justify-center items-center bg-[#F8F8F8] rounded-4xl"
                                >
                                    <CardContent className="flex p-0 flex-col sm:flex-row md:gap-10 sm:gap-6 gap-3 items-center rounded-4xl w-full h-full">
                                        <div className="w-auto h-full  rounded-4xl">
                                            <Image
                                                src={image}
                                                alt="team-image"
                                                width={200}
                                                height={300}
                                                className="sm:w-[450px] w-[350px] h-full md:h-[450px] lg:h-[516px] object-cover rounded-4xl"
                                            />
                                        </div>
                                        {/* <div className="w-full h-full absolute top-0 -left-5 p-3 flex justify-start items-center z-10">
                          <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full "></div>
                        </div> */}
                                        <div className="flex flex-col md:gap-7 gap-4 lg:gap-10 justify-center md:pr-5 w-full h-full">
                                            <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                                                <h5 className="font-medium uppercase lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                                                    {name}
                                                </h5>
                                                <h6 className="font-normal uppercase text-[10px] sm:text-xs md:text-sm lg:text-base">
                                                    {profession}
                                                </h6>
                                            </div>

                                            <p className="lg:text-xl md:text-lg sm:text-sm text-xs">{about}</p>

                                            <div className="flex md:gap-6 sm:gap-3 gap-1 p-3 items-center">
                                                <h5 className="sign xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg font-mono">{name}</h5>
                                                <hr className="border border-black sm:w-[150px] w-[100px] md:w-[200px] lg:w-[290px]" />
                                            </div>

                                            <div className="w-full flex justify-end items-end px-7">
                                                <div className="flex gap-1 lg:gap-3">
                                                    <CarouselPrevious ><MoveLeftIcon size={30} /></CarouselPrevious>
                                                    <CarouselNext ><MoveRightIcon size={30} /></CarouselNext>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* 
  */}
                </Carousel>


            </div>
        </div>
    );
};

export default ChoosePage;