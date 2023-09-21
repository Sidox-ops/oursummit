"use client";
import Image from "next/image";
import { useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";
type Props = PropsWithChildren & EmblaOptionsType;
import { Card, CardFooter, Image as Image1, Button } from "@nextui-org/react";

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
    const testimonialData = [
        {
            title: "Very easy this was to integrate",
            content:
                "If you care for your time, I hands down would go with this.",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
            name: "Bonnie Green",
            position: "Developer at Open AI",
        },
        {
            title: "Solid foundation for any project",
            content:
                "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
            name: "Roberta Casas",
            position: "Lead designer at Dropbox",
        },
        {
            title: "Mindblowing workflow",
            content:
                "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            name: "Jese Leos",
            position: "Software Engineer at Facebook",
        },
        {
            title: "Efficient Collaborating",
            content:
                "You have many examples that can be used to create a fast prototype for your team.",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
            name: "Joseph McFall",
            position: "CTO at Google",
        },
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
                <h1 className="text-2xl font-bold text-center">
                    Ils ont marché avec nous
                </h1>
                <br />
                <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 px-4 gap-4">
                    {testimonialData.map((testimonial, idx) => (
                        <figure
                            key={idx}
                            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700"
                        >
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {testimonial.title}
                                </h3>
                                <p className="my-4">{testimonial.content}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3">
                                <img
                                    className="rounded-full w-9 h-9"
                                    src={testimonial.avatar}
                                    alt={`Profile picture of ${testimonial.name}`}
                                />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>{testimonial.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.position}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            <div className="lg:w-3/4 mx-auto my-16 px-4">
                <h1 className="text-2xl font-bold text-center">
                    Notre histoire
                </h1>
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
