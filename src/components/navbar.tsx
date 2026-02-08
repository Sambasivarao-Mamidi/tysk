"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardNav } from "@/components/ui/card-nav";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

const cardNavItems = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", href: "#about" },
            { label: "Our Story", href: "#about" }
        ]
    },
    {
        label: "Services",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Technologies", href: "#services" },
            { label: "Consulting", href: "#services" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Get in Touch", href: "#contact" },
            { label: "Email", href: "mailto:contact@tysk.com" }
        ]
    }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-2xl font-bold tracking-tight"
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        TYSK
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-neutral-400 transition-colors hover:text-white text-sm font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                        <Link
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="flex items-center gap-2"
                        >
                            <Rocket className="h-4 w-4" />
                            Book Consultation
                        </Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <CardNav
                    items={cardNavItems}
                    logo={
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-bold tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                TYSK
                            </span>
                        </Link>
                    }
                />
            </nav>
        </header>
    );
}
