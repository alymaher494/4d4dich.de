"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronDown, Layers, Users, Printer, Palette, MonitorSmartphone, TrendingUp, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/website-text";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Startseite", href: "/", icon: Home },
    { name: "Über uns", href: "/ueber-uns", icon: Users },
    { name: "Portfolio", href: "/portfolio", icon: Layers },
    {
        name: "Services",
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
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-2xl border-slate-100 shadow-sm py-4"
                    : "bg-transparent border-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center transition-transform hover:scale-105 active:scale-95 shrink-0">
                    <img
                        src="https://4d4dich.de/wp-content/uploads/2025/01/cropped-cropped-cropped-logo-png-1-e1761347164694.png"
                        alt="4D Für Dich"
                        className={cn(
                            "h-10 w-auto object-contain transition-all",
                            isScrolled ? "h-10" : "h-12"
                        )}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-black transition-all",
                                    "text-slate-600 hover:text-primary hover:bg-primary/5"
                                )}
                            >
                                {link.name}
                                {link.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                            </Link>

                            <AnimatePresence>
                                {activeDropdown === link.name && link.children && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 overflow-hidden"
                                    >
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                                    <child.icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">{child.name}</span>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Action */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href={`https://wa.me/${siteInfo.social.whatsapp}`}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black transition-all",
                            "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                        )}
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                        "lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        "text-slate-900 bg-slate-100"
                    )}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-white lg:hidden"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-12">
                                <img
                                    src="https://4d4dich.de/wp-content/uploads/2025/01/cropped-cropped-cropped-logo-png-1-e1761347164694.png"
                                    alt="4D"
                                    className="h-10 w-auto"
                                />
                                <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="space-y-6 flex-grow overflow-y-auto">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="space-y-4">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-black text-slate-900 hover:text-primary transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                        {link.children && (
                                            <div className="pl-6 space-y-4">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-lg font-bold text-slate-500 hover:text-primary flex items-center gap-3"
                                                    >
                                                        <child.icon className="w-5 h-5" />
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="pt-8 border-t border-slate-100 space-y-4">
                                <Link
                                    href={`https://wa.me/${siteInfo.social.whatsapp}`}
                                    className="w-full bg-primary text-white py-5 rounded-full text-center font-black flex items-center justify-center gap-3"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp Chat Starten
                                </Link>
                                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    Expertise seit über 5 Jahren
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}
