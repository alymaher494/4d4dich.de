"use client";

import { motion } from "framer-motion";

interface InternalPageHeroProps {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    marqueeText: string[];
    backgroundImage?: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function InternalPageHero({
    badge,
    title,
    highlight,
    description,
    marqueeText,
    backgroundImage,
    ctaText = "Jetzt Projekt anfragen",
    ctaHref = "/kontakt"
}: InternalPageHeroProps) {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 overflow-hidden bg-[#020617]">
            {/* Background Image with Overlay */}
            {backgroundImage ? (
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-[100vh] object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,188,67,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,13,126,0.1),transparent_50%)]" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-black uppercase tracking-[0.3em] text-primary-light"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        {badge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight"
                    >
                        {title} <br />
                        <span className="text-secondary tracking-tighter">
                            {highlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pt-4"
                    >
                        <a
                            href={ctaHref}
                            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary hover:bg-primary-dark text-white font-black text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                        >
                            {ctaText}
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Decorative Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none z-0">
                <div className="text-[8rem] md:text-[12rem] font-black text-white whitespace-nowrap animate-marquee flex gap-12">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-12">
                            {marqueeText.map((text, idx) => (
                                <span key={idx} className="opacity-50">{text}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
