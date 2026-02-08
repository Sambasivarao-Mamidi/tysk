"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const project = formData.get("project") as string;
        const message = formData.get("message") as string;

        // Construct WhatsApp message
        const whatsappMessage =
            `*New Project Inquiry from TYSK Website*

*Name:* ${name}
*Email:* ${email}
*Project Idea:* ${project}
*Message:* ${message}`;

        // Create WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/918309382895?text=${encodedMessage}`;

        // Simulate a small delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form and state after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            form.reset();
        }, 3000);
    };

    return (
        <section
            id="contact"
            className="relative bg-neutral-950 py-8 md:py-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
                {/* Contact Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white md:text-4xl mb-8 text-center">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Contact Us
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative">
                        {/* Glow effect left */}
                        <div className="absolute -top-20 -left-20 w-40 sm:w-48 h-40 sm:h-48 bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
                        {/* Glow effect right */}
                        <div className="absolute -bottom-20 -right-20 w-40 sm:w-48 h-40 sm:h-48 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />

                        {/* Email */}
                        <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20">
                            <Mail className="h-10 sm:h-12 w-10 sm:w-12 text-cyan-400 mb-3 sm:mb-4" />
                            <p className="text-xs sm:text-sm text-neutral-400 mb-2">Email</p>
                            <a
                                href="mailto:contact@tysk.com"
                                className="text-white text-sm sm:text-base font-semibold hover:text-cyan-400 transition-colors text-center break-all"
                            >
                                contact@tysk.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                            <Phone className="h-10 sm:h-12 w-10 sm:w-12 text-purple-400 mb-3 sm:mb-4" />
                            <p className="text-xs sm:text-sm text-neutral-400 mb-2">Phone</p>
                            <a
                                href="tel:+1234567890"
                                className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 transition-colors text-center"
                            >
                                +1 (234) 567-8900
                            </a>
                        </div>
                    </div>
                </motion.div>

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
                    <p className="max-w-xl mx-auto text-neutral-400 text-base sm:text-lg px-2">
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
                        className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-10 backdrop-blur-sm mx-2 sm:mx-0"
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
                                    className="h-10 sm:h-12 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-sm sm:text-base"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="h-10 sm:h-12 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-sm sm:text-base"
                                />
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
                                    className="h-10 sm:h-12 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-sm sm:text-base"
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
                                    className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 sm:py-3 text-sm sm:text-base text-white ring-offset-background placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="mt-4 sm:mt-6 w-full h-11 sm:h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-70"
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
