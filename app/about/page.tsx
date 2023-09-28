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
            title: "La découverte d'une nouvelle passion",
            content:
                "J’ai découvert Our Summit grâce à sa présidente, Aché, et cela s’est avéré être bien plus qu’une simple association, mais une véritable expérience. J’ai rencontré des personnes super intéressantes, et mon désir de découvrir de nouveaux endroits et de pratiquer de nouveaux sports s’est accru de semaine en semaine. En termes d’émulation, mon expérience avec Our Summit est inoubliable.",
            avatar: "/équipe/elhadj.jpg",
            name: "ELHADJ",
            position: "",
        },
        {
            title: "Étancher ma soiffe d'aventure",
            content:
                "J’ai toujours kiffé les rando mais pour moi, c’était une activité avant tout réservée aux vacances. Quand Our Summit a commencé à proposer des rando hebdomadaires en île de France, c’est comme devenu une évidence. Un bol d’air frais, un tas de rencontres et une bonne dose de bonne humeur.. Bref, hike to meet you 🫶🏻",
            avatar: "/équipe/imen.jpg",
            name: "IMEN",
            position: "",
        },
        {
            title: "Une histoire de famille",
            content:
                "J’ai connu our summit par le biais d’Aché (la présidente de l’association) et je participe au randonnées depuis le 1er jour ! Our summit m’a permis de reprendre une activité physique et m’a permis de découvrir les sports outdoor. Chaque randonnée est unique avec des paysages et des rencontres différentes. Hike to meet you 🍃",
            avatar: "/images/oursummit_2.jpg",
            name: "AZIZA",
            position: "",
        },
        {
            title: "En vrai ? je retrouve juste mes copains",
            content:
                "J'ai beaucoup marché seul, pour réfléchir et me détendre. Lorsque j'ai vu que Oursummit proposait des randonnées, j'ai tout de suite adhéré. J'ai pu retrouver des gens que j'aime et rencontrer de nouvelles personnes qui partagent la même passion que moi.",
            avatar: "/équipe/sidox.jpg",
            name: "SIDOX",
            position: "",
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
                                <Image
                                    className="rounded-full w-9 h-9"
                                    src={testimonial.avatar}
                                    alt={`Profile picture of ${testimonial.name}`}
                                    width={36}
                                    height={36}
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
                    Association qui a été crée à la suite d’une expédition à la
                    montagne. Depuis février 2023, nous organisons des
                    randonnées et essayons d’allier le sport et l’art en
                    proposant des randonnées/photo/vidéo/dessin. Nous voulons
                    promouvoir les sports outdoors dans notre environnement ✨
                </p>
            </div>
        </>
    );
}
