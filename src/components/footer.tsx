"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    services: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "AI/ML Solutions", href: "#services" },
        { name: "Cloud & DevOps", href: "#services" },
        { name: "Business Automation", href: "#services" },
    ],
    company: [
        { name: "About Us", href: "#about" },
        { name: "Student Projects", href: "#about" },
        { name: "Enterprise Solutions", href: "#services" },
        { name: "Startup MVP", href: "#services" },
        { name: "Contact", href: "#contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/devmama", icon: "𝕏" },
    { name: "LinkedIn", href: "https://linkedin.com/company/devmama", icon: "in" },
    { name: "GitHub", href: "https://github.com/devmama", icon: "⚡" },
    { name: "Instagram", href: "https://instagram.com/devmama", icon: "📷" },
];

export function Footer() {
    return (
        <footer className="relative bg-neutral-950 border-t border-white/10" role="contentinfo" aria-label="Footer">
            <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight inline-block mb-4"
                            aria-label="Dev Mama - Home"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Dev Mama
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Premium development agency delivering world-class web applications, 
                            mobile apps, AI/ML solutions, and enterprise software.
                        </p>
                        
                        {/* Contact Info */}
                        <address className="not-italic space-y-3 text-sm">
                            <a 
                                href="mailto:devmama.tech@gmail.com" 
                                className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors"
                                aria-label="Email us at devmama.tech@gmail.com"
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                <span>devmama.tech@gmail.com</span>
                            </a>
                            <a 
                                href="tel:+918309382895" 
                                className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors"
                                aria-label="Call us at +91 83093 82895"
                            >
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                <span>+91 83093 82895</span>
                            </a>
                            <div className="flex items-start gap-2 text-neutral-400">
                                <MapPin className="h-4 w-4 mt-0.5" aria-hidden="true" />
                                <span>India</span>
                            </div>
                        </address>
                    </div>

                    {/* Services Column */}
                    <nav aria-label="Footer services navigation">
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company Column */}
                    <nav aria-label="Footer company navigation">
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Legal & Social Column */}
                    <div>
                        <nav aria-label="Footer legal navigation" className="mb-6">
                            <h3 className="text-white font-semibold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-center text-sm text-neutral-500">
                            © {new Date().getFullYear()} Dev Mama. All rights reserved.
                        </p>
                        <p className="text-center text-sm text-neutral-500">
                            Crafted with 💜 for startups, enterprises & students
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
