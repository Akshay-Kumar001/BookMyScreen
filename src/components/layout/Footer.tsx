
import Link from "next/link";
import {
  Film,
  ArrowRight,
} from "lucide-react";

import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
const footerLinks = [
    {
        title: "Explore",
        links: [
            { label: "Movies", href: "/movies" },
            { label: "Coming Soon", href: "/movies?status=coming_soon" },
            { label: "Cinemas", href: "/cinemas" },
        ],
    },
    {
        title: "Account",
        links: [
            { label: "My Profile", href: "/profile" },
            { label: "My Bookings", href: "/bookings" },
            { label: "Sign In", href: "/login" },
        ],
    },
    {
        title: "Information",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-white">
            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

                {/* Brand information */}
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Film size={27} className="text-[#E63946]" />

                            <span className="text-2xl font-extrabold tracking-tight">
                                BookMy<span className="text-[#E63946]">Screen</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Your movie experience starts here. Discover movies,
                            explore cinemas and book your tickets with ease.
                        </p>

                        <Link
                            href="/movies"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E63946] transition hover:gap-3"
                        >
                            Explore Movies
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    {/* Footer navigation */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-5 text-sm font-bold">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-400 transition hover:text-[#E63946]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
                    <p className="text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} BookMyScreen. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <SiInstagram size={20} />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <SiFacebook size={20} />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <SiYoutube size={21} />
                        </a>
                    </div>  
                </div>

            </div>
        </footer>
    );
}
