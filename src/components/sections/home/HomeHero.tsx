"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Marketing, das wirkt.",
        subtitle: "Strategien für messbaren Erfolg.",
        description: "Wir entwickeln datengestützte Marketingkampagnen, die Ihre Zielgruppe erreichen und überzeugen.",
        color: "bg-primary", // fallback
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Design, das begeistert.",
        subtitle: "Ihr Markenauftritt in Perfektion.",
        description: "Vom Logo bis zur Corporate Identity – wir gestalten Marken, die im Gedächtnis bleiben.",
        color: "bg-secondary",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Druck, der beeindruckt.",
        subtitle: "Haptische Erlebnisse für Ihre Kunden.",
        description: "Hochwertige Printprodukte, die Qualität und Professionalität ausstrahlen.",
        color: "bg-accent",
        image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-white">
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
                            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full text-center text-white">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold uppercase tracking-wider mb-6"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.span>

                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                                >
                                    {slides[currentSlide].title}
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
