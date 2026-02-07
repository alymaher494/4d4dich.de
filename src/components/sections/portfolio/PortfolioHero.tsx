"use client";

import { motion } from "framer-motion";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { portfolioContent } from "@/data/website-text";
import { fadeInUp } from "@/lib/animations";

export default function PortfolioHero() {
    return (
        <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-slate-900">
            <AmbientBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                        {portfolioContent.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Unsere <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Meisterwerke.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        {portfolioContent.subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
