"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, FileText, ArrowUpRight } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

const features = [
    {
        icon: Lightbulb,
        title: "Strategy",
        description:
            "We help you define your project scope, choose the right technologies, and create a roadmap to success.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: Code2,
        title: "Coding",
        description:
            "From frontend to backend, IoT to AI/ML - our expert developers bring your vision to life with clean, scalable code.",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        icon: FileText,
        title: "Documentation",
        description:
            "Comprehensive project reports, IEEE format papers, and presentation slides - all professionally crafted.",
        gradient: "from-purple-500 to-pink-600",
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
            className="relative py-20 md:py-32 overflow-hidden"
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
                        About Us
                    </p>
                    <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
                        Your Final Year Project,{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Perfected
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
                        We provide end-to-end consultancy for BTech/MTech final year projects,
                        ensuring you deliver excellence.
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
                            <BackgroundGradient className="rounded-[22px] p-6 md:p-8 bg-neutral-900 h-full">
                                {/* Icon */}
                                <div
                                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                                >
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl flex items-center gap-2 group">
                                    {feature.title}
                                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral-400" />
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
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
