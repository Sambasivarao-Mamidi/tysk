"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: Linkedin,
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: Instagram,
    },
];

export function Footer() {
    return (
        <footer className="relative bg-neutral-950 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 md:px-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            TYSK
                        </span>
                    </Link>

                    {/* Tagline */}
                    <p className="text-neutral-400 text-center max-w-md">
                        Your Final Year Project Consultancy.
                        <br className="hidden md:block" />
                        Defined by Execution.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:text-white min-h-[48px] min-w-[48px]"
                                aria-label={link.name}
                            >
                                <link.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="w-full pt-8 border-t border-white/10">
                        <p className="text-center text-sm text-neutral-500">
                            © {new Date().getFullYear()} TYSK. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
