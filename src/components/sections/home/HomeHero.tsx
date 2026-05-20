"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/wordpress";

interface Slide {
    title: string;
    highlight?: string;
    subtitle?: string;
    description?: string;
    image: string;
}

const fallbackSlides: Slide[] = [
    {
        title: "Druck,",
        highlight: "der beeindruckt.",
        subtitle: "Haptische Erlebnisse für Ihre Kunden.",
        description: "Hochwertige Printprodukte, die Qualität und Professionalität ausstrahlen.",
        image: "/images/print+mACHINE.webp",
    },
    {
        title: "Design,",
        highlight: "das begeistert.",
        subtitle: "Ihr Markenauftritt in Perfektion.",
        description: "Vom Logo bis zur Corporate Identity – wir gestalten Marken, die im Gedächtnis bleiben.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2342&auto=format&fit=crop",
    },
    {
        title: "Marketing,",
        highlight: "das wirkt.",
        subtitle: "Strategien für messbaren Erfolg.",
        description: "Wir entwickeln datengestützte Marketingkampagnen, die Ihre Zielgruppe erreichen und überzeugen.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop",
    },
    {
        title: "Web & App,",
        highlight: "die performen.",
        subtitle: "Digitale Erlebnisse der Extraklasse.",
        description: "Wir entwickeln moderne Webseiten und Apps, die schnelles Wachstum und starke Performance garantieren.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
    }
];

interface HomeHeroProps {
    slides?: Slide[];
}

export default function HomeHero({ slides: dynamicSlides }: HomeHeroProps) {
    const slides = dynamicSlides && dynamicSlides.length > 0 ? dynamicSlides : fallbackSlides;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const firstRenderTimer = setTimeout(() => setIsFirstRender(false), 100);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => {
            clearInterval(timer);
            clearTimeout(firstRenderTimer);
        };
    }, [slides.length]);

    return (
        <section className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-[#020617]">
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={isFirstRender ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10" />

                        <Image
                            src={getImageUrl(slides[currentSlide].image)}
                            alt={slides[currentSlide].title}
                            fill
                            priority={currentSlide === 0}
                            className="object-cover"
                            sizes="100vw"
                            quality={75}
                        />

                        {/* Content - No opacity:0 animations to avoid LCP penalty */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center text-white mt-24 md:mt-0">
                                {slides[currentSlide].subtitle && (
                                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white border-opacity-20 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
                                        {slides[currentSlide].subtitle}
                                    </span>
                                )}

                                <h1
                                    className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in"
                                    style={{ animationDelay: '0.05s' }}
                                >
                                    {slides[currentSlide].title} <br className="hidden md:inline" />
                                    {slides[currentSlide].highlight && (
                                        <span className="text-white block md:inline"> {slides[currentSlide].highlight}</span>
                                    )}
                                </h1>

                                {slides[currentSlide].description && (
                                    <p
                                        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light animate-fade-in"
                                        style={{ animationDelay: '0.15s' }}
                                    >
                                        {slides[currentSlide].description}
                                    </p>
                                )}

                                <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
                                    <Link
                                        href="/kontakt"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                                    >
                                        Starten Sie Ihr Projekt
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            {slides.length > 1 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                                }`}
                            aria-label={`Slide ${index + 1} anzeigen`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
