"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Building2, Zap } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

const features = [
    {
        icon: Building2,
        title: "Business Solutions",
        description:
            "Enterprise-grade web applications, SaaS platforms, and automation tools that scale with your business growth.",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        icon: Users,
        title: "Student Projects",
        description:
            "Complete project support for BTech/MTech students - from ideation to deployment with production-quality code.",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        icon: Zap,
        title: "MVP Development",
        description:
            "Rapid prototyping and MVP development for startups. Get to market fast with scalable architecture from day one.",
        gradient: "from-amber-500 to-orange-600",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export function AboutSection() {
    return (
        <section
            id="about"
            // Adjust the scroll position by changing scroll-mt-28 (larger number = lower scroll position)
            className="relative py-16 md:py-32 overflow-hidden scroll-mt-16"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
                        What We Do
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl mb-4">
                        Solutions for{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Everyone
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-neutral-400 text-base sm:text-lg px-2">
                        Whether you are a student working on your final year project, a startup building your MVP, 
                        or an enterprise looking for scalable solutions - we deliver production-grade results.
                    </p>
                </motion.div>

                {/* Feature Cards with Background Gradient */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-8"
                >
                    {features.map((feature) => (
                        <motion.div key={feature.title} variants={itemVariants}>
                            <BackgroundGradient className="rounded-3xl p-4 sm:p-6 md:p-8 bg-neutral-900 h-full">
                                {/* Icon */}
                                <div
                                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                                >
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-lg sm:text-xl font-semibold text-white md:text-2xl flex items-center gap-2 group">
                                    {feature.title}
                                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral-400" />
                                </h3>
                                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </BackgroundGradient>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
