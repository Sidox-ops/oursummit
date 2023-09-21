/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["placehold.co"],
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true, // Si vous voulez une redirection 301 (permanente), sinon mettez cela à false pour une redirection 302
            },
        ];
    },
};

module.exports = nextConfig;
