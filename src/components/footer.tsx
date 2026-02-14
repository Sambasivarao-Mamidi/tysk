"use client";

import Link from "next/link";

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
                            Dev Mama
                        </span>
                    </Link>

                    {/* Tagline */}
                    <p className="text-neutral-400 text-center max-w-md">
                        Production-grade solutions for students and businesses.
                        <br className="hidden md:block" />
                        From concept to deployment, we build what matters.
                    </p>

                    {/* Copyright */}
                    <div className="w-full pt-8 border-t border-white/10">
                        <p className="text-center text-sm text-neutral-500">
                            © {new Date().getFullYear()} Dev Mama. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
