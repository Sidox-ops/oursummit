import Image from "next/image";

const stats = [
    { name: "Parcours", value: "12" },
    { name: "Randonneurs convaincus", value: "100+" },
    { name: "Marques partenaires", value: "3" },
];

export default function Home(): React.ReactNode {
    return (
        <div
            className="space-y-20"
            // style={{ margin: "200px 50px 50px 50px", display: "block" }}
            style={{ margin: "50px", display: "column" }}
        >
            <div className="rounded-3xl relative overflow-hidden py-24 sm:py-32 ">
                <Image
                    src="/images/oursummit_0.jpg"
                    alt="Grimpeurs de l'association OURSUMMIT"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Hike to meet you
                        </h2>
                        <h2 className="mt-6 text-xl leading-10 font-semibold text-gray-300">
                            Bienvenue chez OURSUMMIT :
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Votre communauté dédiée à la randonée ! Fondée par
                            Aché, un passionné des grands espaces et des
                            sentiers, notre association s'engage à explorer et
                            valoriser les merveilles naturelles que notre monde
                            a à offrir. Que vous soyez un randonneur novice
                            désireux de découvrir les joies de la marche ou un
                            vétéran des treks cherchant des compagnons
                            d'aventure, OURSUMMIT est là pour chaque pas de
                            votre voyage.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.name}
                                    className="flex flex-col-reverse"
                                >
                                    <dt className="text-base leading-7 text-gray-300">
                                        {stat.name}
                                    </dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div>
                    <Image
                        src="/images/oursummit_1.jpg"
                        alt="Description de l'image"
                        className="rounded-3xl"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="w-1/2 p-12">
                    <h3 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        La Mission de OURSUMMIT
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Chaque pas que nous faisons hors de notre zone de
                        confort est une invitation au dépassement de soi. Sur ce
                        chemin, les véritables rencontres se forment, non
                        seulement avec d'autres passionnés partageant nos
                        ambitions, mais aussi avec des parties cachées de
                        nous-mêmes. Ces moments privilégiés nous révèlent des
                        facettes inconnues de notre personnalité et nous
                        rapprochent des autres de manière inattendue.
                    </p>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="w-1/2 p-12">
                    <h3 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        La Magie de la Nature
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Se perdre dans la nature est en réalité une manière de
                        se retrouver. Chaque arbre, chaque montagne, chaque
                        ruisseau est une découverte qui nous rappelle la beauté
                        simple et pure du monde qui nous entoure. En prenant le
                        temps d'explorer et d'apprécier ces merveilles, nous
                        renouons avec un sentiment primordial d'appartenance et
                        de respect envers la Terre qui nous accueille.
                    </p>
                </div>
                <div>
                    <Image
                        src="/images/oursummit_2.jpg"
                        alt="Description de l'image"
                        className="rounded-3xl"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
}
