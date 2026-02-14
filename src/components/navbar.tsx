"use client";

import * as React from "react";
import Link from "next/link";

import { CardNav } from "@/components/ui/card-nav";
import DecryptedText from "@/components/ui/decrypted-text";
import GradientText from "@/components/ui/gradient-text";
import PillNav from "@/components/ui/pill-nav";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const cardNavItems = [
    {
        label: "Home",
        bgColor: "#0A0510",
        textColor: "#fff",
        links: [
            { label: "Home", href: "#home" }
        ]
    },
    {
        label: "About",
        bgColor: "#150B22",
        textColor: "#fff",
        links: [
            { label: "What We Do", href: "#about" }
        ]
    },
    {
        label: "Services",
        bgColor: "#201236",
        textColor: "#fff",
        links: [
            { label: "Technologies", href: "#services" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#2B194A",
        textColor: "#fff",
        links: [
            { label: "Start Project", href: "#contact" }
        ]
    }
];

export function Navbar() {
    const activeId = useScrollSpy(["home", "about", "services", "contact"], 150);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
                    ? "bg-neutral-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
                {/* Mobile Logo & Toggle */}
                <div className="flex w-full items-center justify-between md:hidden">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-bold tracking-tight"
                    >
                        <GradientText
                            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
                            animationSpeed={8}
                            showBorder={false}
                        >
                            <DecryptedText
                                text="Dev Mama"
                                speed={100}
                                maxIterations={20}
                                characters="ABCD1234!?"
                                parentClassName=""
                                className="text-transparent"
                                encryptedClassName="text-transparent"
                                animateOn="view"
                            />
                        </GradientText>
                    </Link>
                    <CardNav
                        items={cardNavItems}
                        logo={
                            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                                <GradientText
                                    colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                >
                                    <DecryptedText
                                        text="Dev Mama"
                                        speed={100}
                                        maxIterations={20}
                                        characters="ABCD1234!?"
                                        parentClassName=""
                                        className="text-transparent"
                                        encryptedClassName="text-transparent"
                                        animateOn="view"
                                    />
                                </GradientText>
                            </Link>
                        }
                    />
                </div>

                {/* Desktop PillNav */}
                <div className="hidden w-full md:block">
                    <PillNav
                        logo={
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-2xl font-bold tracking-tight"
                            >
                                <GradientText
                                    colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                >
                                    <DecryptedText
                                        text="Dev Mama"
                                        speed={100}
                                        maxIterations={20}
                                        characters="ABCD1234!?"
                                        parentClassName=""
                                        className="text-transparent"
                                        encryptedClassName="text-transparent"
                                        animateOn="view"
                                    />
                                </GradientText>
                            </Link>
                        }
                        logoAlt="Dev Mama"
                        items={navItems}
                        activeHref={`#${activeId}`}
                        baseColor="#a3a3a3"
                        hoveredPillTextColor="#ffffff"
                        pillColor="rgba(255,255,255,0.1)"
                        pillTextColor="#ffffff"
                        className="p-0"
                        onItemClick={handleNavClick}
                    />
                </div>
            </nav>
        </header>
    );
}
