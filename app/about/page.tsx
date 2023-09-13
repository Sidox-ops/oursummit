"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">{children}</div>
        </div>
    );
};
export default function About(): React.ReactNode {
    const images = [
        "/images/oursummit_2.jpg",
        "/images/oursummit_2.jpg",
        "/images/oursummit_2.jpg",
        "/images/oursummit_2.jpg",
        "/images/oursummit_2.jpg",
    ];
    return (
        <div className="lg:w-3/4 mx-auto my-2">
            <Carousel loop>
                {images.map((src, i) => {
                    return (
                        <div className="relative h-64 flex-[0_0_100%]" key={i}>
                            <Image
                                src={src}
                                fill
                                className="object-cover"
                                alt="alt"
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
