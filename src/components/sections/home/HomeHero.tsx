"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        tag: "Digital Excellence",
        title: "Marketing, das messbar wirkt.",
        description: "Wir entwickeln datengestützte Strategien, die Ihre Zielgruppe nicht nur erreichen, sondern nachhaltig überzeugen.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        tag: "Creative Studio",
        title: "Design, das Ihre Marke definiert.",
        description: "Vom Logo bis zur kompletten Corporate Identity – wir gestalten visuelle Erlebnisse, die im Gedächtnis bleiben.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 3,
        tag: "Premium Print",
        title: "Druck, der Haptik erlebbar macht.",
        description: "Hochwertige Printprodukte, die Qualität ausstrahlen و Ihre Professionalität greifbar machen.",
        image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function HomeHero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-slate-950">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background with Zoom Effect */}
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[current].image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10" />
                    </motion.div>

                    {/* Content Container */}
                    <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                        <div className="max-w-3xl space-y-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-primary-light text-xs font-black uppercase tracking-[0.3em]"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                {slides[current].tag}
                            </motion.div>

                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tight"
                            >
                                {slides[current].title.split(',')[0]}
                                <span className="block text-primary">
                                    {slides[current].title.split(',')[1]}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
                            >
                                {slides[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/kontakt"
                                    className="btn-primary flex items-center gap-3 group"
                                >
                                    Projekt anfragen
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/dienstleistungen"
                                    className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    Unsere Leistungen
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-12 z-30 hidden md:flex gap-4">
                <button
                    onClick={prev}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={next}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Lines */}
            <div className="absolute bottom-12 left-6 md:left-12 z-30 flex gap-4 items-end">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="group flex flex-col gap-2"
                    >
                        <span className={`text-xs font-bold transition-all ${current === i ? "text-primary" : "text-white/40"}`}>
                            0{i + 1}
                        </span>
                        <div className={`h-[2px] w-12 md:w-20 bg-white/20 relative overflow-hidden`}>
                            {current === i && (
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 6, ease: "linear" }}
                                    className="absolute inset-0 bg-primary"
                                />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
