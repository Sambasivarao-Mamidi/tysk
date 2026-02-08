"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section
            id="contact"
            className="relative bg-neutral-950 py-20 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Get Started
                    </p>
                    <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
                        Ready to{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Execute
                        </span>
                        ?
                    </h2>
                    <p className="max-w-xl mx-auto text-neutral-400 text-lg">
                        Share your project idea with us and let&apos;s turn it into reality.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-sm"
                    >
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Name */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-base"
                                />
                            </div>

                            {/* Department */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="department"
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    required
                                    className="flex h-12 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base text-white ring-offset-background focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                        backgroundPosition: "right 0.5rem center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "1.5em 1.5em",
                                    }}
                                >
                                    <option value="" disabled className="bg-neutral-900">
                                        Select Department
                                    </option>
                                    <option value="CSE" className="bg-neutral-900">
                                        Computer Science (CSE)
                                    </option>
                                    <option value="ECE" className="bg-neutral-900">
                                        Electronics (ECE)
                                    </option>
                                    <option value="IT" className="bg-neutral-900">
                                        Information Technology (IT)
                                    </option>
                                    <option value="ME" className="bg-neutral-900">
                                        Mechanical Engineering (ME)
                                    </option>
                                    <option value="Other" className="bg-neutral-900">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Project Idea */}
                            <div className="space-y-2 md:col-span-2">
                                <label
                                    htmlFor="project"
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    Project Idea
                                </label>
                                <Input
                                    id="project"
                                    name="project"
                                    type="text"
                                    placeholder="e.g., AI-based attendance system"
                                    required
                                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-base"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2 md:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us more about your project requirements..."
                                    className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-3 text-base text-white ring-offset-background placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="mt-6 w-full h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : isSubmitted ? (
                                <>
                                    <span className="text-green-300">✓ Request Submitted!</span>
                                </>
                            ) : (
                                <>
                                    Submit Request
                                    <Send className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
