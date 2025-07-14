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

const ChoosePage = () => {
    let choose_data = [
        {
            title: "Experienced Attorneys",
            sign: '----John Doe, Esq.',
            quote: "Schedule a free initial consultation to discuss your legal needs and goals.",
            description:
                "Our team comprises seasoned legal professionals with a proven track record of success in various legal fields.",
        },
        {
            title: "Experienced Attorneys",
            sign: '----John Doe, Esq.',
            quote: "Schedule a free initial consultation to discuss your legal needs and goals.",
            description:
                "Our team comprises seasoned legal professionals with a proven track record of success in various legal fields.",
        },
        {
            title: "Experienced Attorneys",
            sign: '----John Doe, Esq.',
            quote: "Schedule a free initial consultation to discuss your legal needs and goals.",
            description:
                "Our team comprises seasoned legal professionals with a proven track record of success in various legal fields.",
        },
        {
            title: "Experienced Attorneys",
            sign: '----John Doe, Esq.',
            quote: "Schedule a free initial consultation to discuss your legal needs and goals.",
            description:
                "Our team comprises seasoned legal professionals with a proven track record of success in various legal fields.",
        },
    ];

    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7'>
            <div className='lg:w-[80%] md:w-[95%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Why Us" />
                    <h2 className='text-6xl font-mono text-center'>Why Choose Us</h2>
                </div>

                <Carousel className="w-full md:p-6 p-3">
                    <CarouselContent>
                        {choose_data.map(({ title, description, quote, sign }, index) => (
                            <CarouselItem className="">
                                <Card
                                    key={index}
                                    className="w-[99%] shadow-none p-0 border-none relative h-auto flex justify-center items-center bg-transparent"
                                >
                                    <CardContent className="flex p-0 flex-col sm:flex-row md:gap-10 sm:gap-6 gap-3 items-center justify-start w-full h-full">
                                        <div className="w-[330px] h-[430px] bg-foreground relative p-6 flex flex-col justify-center gap-10 my-3">
                                            <Image src='/images/quote.png' alt="quote-icon" width={78} height={55} className="absolute -top-5 right-0 z-50" />
                                            <h4 className="text-secondary font-sans font-semibold text-3xl">{quote}</h4>
                                            <p className="font-sign text-secondary text-4xl w-full text-end">{sign}</p>
                                        </div>

                                        <div className="flex flex-col gap-3 justify-center md:pr-5 w-md h-full">
                                            <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                                                <h2 className='lg:text-4xl  sm:text-3xl xs:text-2xl text-xl text-foreground font-mono text-center border-b-8 border-primary w-fit'>{title}</h2>
                                            </div>
                                            <p className='max-w-3xl text-foreground text-base'>
                                                {description}
                                            </p>
                                            <div className="foot w-full h-auto py-3 flex justify-start">
                                                <Button className='bg-transparent px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>Get In Touch</Button>
                                            </div>


                                            <div className="w-full flex justify-end items-end px-7 absolute bottom-20 right-20 z-40">
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
                </Carousel>


            </div>
        </div>
    );
};

export default ChoosePage;