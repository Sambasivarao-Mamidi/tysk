"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
    label: string;
    bgColor: string;
    textColor: string;
    links: { label: string; href?: string; ariaLabel?: string }[];
}

interface CardNavProps {
    items: NavItem[];
    logo?: React.ReactNode;
}

export const CardNav = ({ items, logo }: CardNavProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Variants for the card stack animation
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
    };

    const cardVariants = {
        hidden: { y: "100%", opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
            } as const
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" as const }
        },
    };

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="relative z-[60] p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col bg-neutral-950/95 backdrop-blur-xl"
                    >
                        {/* Header in the menu */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <div className="text-xl font-bold">{logo}</div>
                            {/* Spacer for the close button alignment */}
                            <div className="w-10"></div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="flex-1 overflow-y-auto p-8 flex flex-col justify-center gap-12"
                        >
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <motion.h3
                                        variants={cardVariants}
                                        className="text-sm font-medium uppercase tracking-widest text-neutral-500"
                                    >
                                        {item.label}
                                    </motion.h3>

                                    <div className="flex flex-col gap-2">
                                        {item.links.map((link, linkIndex) => (
                                            <motion.div
                                                key={linkIndex}
                                                variants={cardVariants}
                                            >
                                                <Link
                                                    href={link.href || "#"}
                                                    onClick={() => setIsOpen(false)}
                                                    className="inline-block text-4xl font-bold text-white hover:text-cyan-400 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
