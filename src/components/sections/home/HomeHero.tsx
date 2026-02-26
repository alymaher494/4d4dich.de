"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Druck,",
        highlight: "der beeindruckt.",
        subtitle: "Haptische Erlebnisse für Ihre Kunden.",
        description: "Hochwertige Printprodukte, die Qualität und Professionalität ausstrahlen.",
        color: "bg-accent",
        image: "/images/assets/modern_printer.png",
    },
    {
        id: 2,
        title: "Design,",
        highlight: "das begeistert.",
        subtitle: "Ihr Markenauftritt in Perfektion.",
        description: "Vom Logo bis zur Corporate Identity – wir gestalten Marken, die im Gedächtnis bleiben.",
        color: "bg-secondary",
        image: "/images/assets/7ed7b576f21033c3b19d53f2354863b2.jpg",
    },
    {
        id: 3,
        title: "Marketing,",
        highlight: "das wirkt.",
        subtitle: "Strategien für messbaren Erfolg.",
        description: "Wir entwickeln datengestützte Marketingkampagnen, die Ihre Zielgruppe erreichen und überzeugen.",
        color: "bg-primary", // fallback
        image: "/images/assets/8a91e6a6866fef96cd87ebc74dee8414.jpg",
    },
];

export default function HomeHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-[#020617]">
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center text-white mt-24 md:mt-0">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block py-1 px-4 rounded-full bg-white text-secondary shadow backdrop-blur-md border border-white text-sm font-bold uppercase tracking-wider mb-6"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.span>

                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                                >
                                    {slides[currentSlide].title} <br className="md:hidden" />
                                    <span className="text-white">{slides[currentSlide].highlight}</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Link
                                        href="/kontakt"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                                    >
                                        Starten Sie Ihr Projekt
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
