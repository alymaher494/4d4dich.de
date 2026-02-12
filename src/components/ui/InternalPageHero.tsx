"use client";

import { motion } from "framer-motion";

interface InternalPageHeroProps {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    marqueeText: string[];
}

export default function InternalPageHero({
    badge,
    title,
    highlight,
    description,
    marqueeText
}: InternalPageHeroProps) {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950 min-h-[60vh] flex flex-col justify-center">
            {/* Background Texture/Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,188,67,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,13,126,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <div className="space-y-8">
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
                        className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight"
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
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>

            {/* Scrolling Decorative Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
                <div className="text-[10rem] md:text-[15rem] font-black text-white whitespace-nowrap animate-marquee flex gap-12">
                    {/* Duplicate mapping 4 times to ensure seamless loop typically handled by CSS or duplicated content */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-12">
                            {marqueeText.map((text, idx) => (
                                <span key={idx}>{text}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
