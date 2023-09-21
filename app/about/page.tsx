"use client";
import Image from "next/image";
import { useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ ...options });

    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = () => {
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        };
        const interval = setInterval(autoScroll, 5000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">{children}</div>
        </div>
    );
};
export default function About(): React.ReactNode {
    const images = [
        "/images/oursummit_2.jpg",
        "/images/dune_oursummit.jpg",
        "/images/group_oursummit.jpg",
        "/images/back_group_oursummit.jpg",
        "/images/color_sentier_oursummit.jpg",
    ];

    const altTexts = [
        "Une randonneuse au milieu des fougères",
        "Des randonneurs gravissants une dune",
        "Un groupe de randonneurs faisant une pose pour une photo",
        "Des sacs à dos de randonneuses",
        "Un groupe de jeunes randonneurs avançant sur un sentier coloré",
    ];
    return (
        <>
            <div className="lg:w-3/4 mx-auto my-16">
                <Carousel loop>
                    {images.map((src, i) => {
                        return (
                            <div
                                className="relative h-80 flex-[0_0_100%]"
                                key={i}
                            >
                                <Image
                                    src={src}
                                    fill
                                    className={`object-cover ${styles.embla__container}`}
                                    alt={altTexts[i]}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="lg:w-3/4 mx-auto my-16 px-4">
                <h1 className="text-4xl font-bold text-center">
                    Notre histoire
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam,
                    voluptatibus. Quisquam, voluptatibus. Quisquam,
                    voluptatibus. Quisquam, voluptatibus. Quisquam,
                </p>
            </div>
            <div className="lg:w-3/4 mx-auto my-16 px-4">
                <h1 className="text-4xl font-bold text-center">Notre équipe</h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam,
                    voluptatibus. Quisquam, voluptatibus. Quisquam,
                    voluptatibus. Quisquam, voluptatibus. Quisquam,
                </p>
            </div>
        </>
    );
}
