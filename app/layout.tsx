import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Oursummit",
    description: "Association de hiking",
    icons: {
        icon: "/favicon.ico",
        apple: "/oursummit.jpg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <title>Oursummit</title>
            <body className={inter.className}>
                <Navbar />
                {/* <nav>
                    <div className="logo">
                        <Image
                            src="/Oursummit_logo.svg"
                            alt="Oursummit Logo"
                            width={280}
                            height={280}
                            priority
                        />
                    </div>

                    <div className="links">
                        <a className="link btn-100" href="/home">
                            Home
                        </a>
                        <a className="link btn-100" href="/about">
                            About
                        </a>
                    </div>
                    <a className="link btn-100">Je m'inscris</a>
                </nav> */}
                {children}
            </body>
        </html>
    );
}
