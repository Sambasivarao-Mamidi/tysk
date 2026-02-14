"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import DecryptedText from "@/components/ui/decrypted-text";
import GradientText from "@/components/ui/gradient-text";

export function HeroSection() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
            <BackgroundBeams className="opacity-70" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-sm text-neutral-400">Now accepting projects for 2026</span>
                    </div>



                    {/* Main Headline */}
                    <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        <GradientText
                            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
                            animationSpeed={8}
                            showBorder={false}
                        >
                            <DecryptedText
                                text="Dev Mama"
                                animateOn="view"
                                revealDirection="start"
                                sequential={true}
                                speed={100}
                                maxIterations={20}
                                characters="ABCD1234!?"
                                className="text-transparent"
                                parentClassName=""
                                encryptedClassName="text-transparent"
                            />
                        </GradientText>
                    </h1>

                    {/* Tagline */}
                    <div className="mb-6 text-xl font-light text-neutral-400 sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto">
                        <DecryptedText
                            text="Building Production-Grade Solutions"
                            animateOn="view"
                            revealDirection="start"
                            sequential={true}
                            speed={50}
                            maxIterations={15}
                            characters="ABCD1234!?"
                            className="text-neutral-300 font-medium"
                            parentClassName="inline-block"
                            encryptedClassName="text-neutral-600"
                        />
                    </div>

                    {/* Description */}
                    <p className="mb-10 text-base font-medium text-neutral-400 sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        From student projects to enterprise solutions, we deliver
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                            scalable, production-ready applications
                        </span>
                        that drive real business value.
                    </p>

                    {/* Stats/Value Props */}
                    <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-10">
                        <div className="flex items-center gap-2 text-neutral-400">
                            <Building2 className="h-5 w-5 text-cyan-400" />
                            <span className="text-sm md:text-base">Business Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400">
                            <GraduationCap className="h-5 w-5 text-purple-400" />
                            <span className="text-sm md:text-base">Student Projects</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400">
                            <Sparkles className="h-5 w-5 text-pink-400" />
                            <span className="text-sm md:text-base">AI/ML & Innovation</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-base sm:text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 group"
                        >
                            <Link
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="flex items-center gap-2"
                            >
                                Start Your Project
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                {/* Glow effect */}
                                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base sm:text-lg backdrop-blur-sm min-h-[48px] sm:min-h-[52px] px-6 sm:px-8"
                        >
                            <Link
                                href="#about"
                                onClick={(e) => handleNavClick(e, "#about")}
                                className="flex items-center gap-2"
                            >
                                Explore Services
                                <ChevronDown className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
