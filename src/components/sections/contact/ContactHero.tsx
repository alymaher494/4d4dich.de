"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative pt-48 pb-40 overflow-hidden bg-slate-950">
            {/* Background Texture/Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,188,67,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-black uppercase tracking-[0.3em] text-primary-light"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Get in Touch
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black text-white leading-tight tracking-tight"
                    >
                        Sprechen wir <br />
                        <span className="premium-gradient-text tracking-tighter">
                            über Erfolg.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Sie haben eine Vision? Wir haben die Expertise. Lassen Sie uns gemeinsam etwas Besonderes schaffen.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
