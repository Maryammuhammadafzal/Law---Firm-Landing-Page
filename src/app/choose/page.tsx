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
        <div className='w-full h-auto flex justify-center items-center lg:py-20 md:py-14 sm:py-7 py-4'>
            <div className='lg:w-[80%] md:w-[95%] w-full md:px-0 px-3  h-auto flex flex-col lg:gap-16 md:gap-12 gap-8 justify-center items-center'>
                <div className="heading flex flex-col gap-6 items-center justify-center h-auto w-full">
                    <SubHeading title="Why Us" />
                    <h2 className='lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-mono text-center'>Why Choose Us</h2>
                </div>

                <Carousel className="w-full md:p-6 p-3">
                    <CarouselContent>
                        {choose_data.map(({ title, description, quote, sign }, index) => (
                            <CarouselItem key={index} className="ml-1">
                                <Card
                                    key={index}
                                    className="w-[99%] shadow-none p-0 border-none relative h-auto flex justify-center items-center bg-transparent"
                                >
                                    <CardContent className="flex p-0 flex-col sm:flex-row md:gap-10 sm:gap-6 gap-3 items-center justify-start w-full h-full">
                                        <div className="xs:w-[330px] w-[250px] lg:h-[430px] h-[330px] bg-foreground relative xs:p-6 p-3 flex flex-col justify-center gap-10 my-3">
                                            <Image src='/images/quote.png' alt="quote-icon" width={78} height={55} className="absolute -top-5 right-0 z-50" />
                                            <h4 className="text-secondary font-sans font-semibold lg:text-3xl md:text-2xl xs:text-xl text-lg">{quote}</h4>
                                            <p className="font-sign text-secondary text-4xl w-full text-end">{sign}</p>
                                        </div>

                                        <div className="flex flex-col gap-3 max-xs:items-center justify-center md:pr-5 w-md h-full">
                                            <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                                                <h2 className='lg:text-4xl  md:text-3xl xs:text-2xl text-xl text-foreground font-mono text-center border-b-8 border-primary w-fit'>{title}</h2>
                                            </div>
                                            <p className='xl:max-w-3xl lg:max-w-2xl md:max-w-lg sm:max-w-sm xs:max-w-xs max-w-[250px] text-foreground md:text-base sm:text-sm text-xs'>
                                                {description}
                                            </p>
                                            <div className="foot w-full h-auto py-3 flex xs:justify-start justify-center">
                                                <Button className='bg-transparent  px-10 border border-foreground text-foreground text-sm font-sans rounded-full'>Get In Touch</Button>
                                            </div>


                                            <div className="w-fit  absolute sm:bottom-20 bottom-5  xs:right-20 right-5 z-40">
                                                <div className="flex w-fit gap-1">
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