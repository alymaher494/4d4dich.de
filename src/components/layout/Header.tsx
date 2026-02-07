"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Home, Users, Printer, Palette, MonitorSmartphone, TrendingUp, Mail, ChevronDown, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/website-text";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Startseite", href: "/", icon: Home },
    { name: "Über uns", href: "/ueber-uns", icon: Users },
    { name: "Portfolio", href: "/portfolio", icon: Layers },
    {
        name: "Dienstleistungen",
        href: "/dienstleistungen",
        icon: Printer,
        children: [
            { name: "Druck", href: "/druck", icon: Printer },
            { name: "Design", href: "/grafik-design", icon: Palette },
            { name: "Web & App", href: "/web-app", icon: MonitorSmartphone },
            { name: "Marketing", href: "/marketing", icon: TrendingUp },
        ]
    },
    { name: "Blog", href: "/blog", icon: MessageCircle },
    { name: "Kontakt", href: "/kontakt", icon: Mail },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-5",
                isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="https://4d4dich.de/wp-content/uploads/2025/01/cropped-cropped-cropped-logo-png-1-e1761347164694.png"
                        alt="4D Für Dich"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        if (link.children) {
                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors tracking-wide py-2"
                                    >
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                                    </Link>

                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-2"
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                                                    >
                                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                            <child.icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-sm font-bold text-slate-700">{child.name}</span>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 hover:text-primary transition-colors tracking-wide"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href={`https://wa.me/${siteInfo.social.whatsapp}`}
                        className="btn-animated btn-animated-sm"
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="p-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.children ? (
                                        <div className="space-y-2">
                                            <div className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="flex items-center gap-3 text-slate-600 hover:text-primary py-2"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <child.icon className="w-4 h-4" />
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-3 text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <link.icon className="w-5 h-5" />
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href={`https://wa.me/${siteInfo.social.whatsapp}`}
                                className="btn-animated w-full text-center mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
