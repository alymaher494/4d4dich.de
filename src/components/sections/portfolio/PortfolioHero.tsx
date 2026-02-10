"use client";

import { motion } from "framer-motion";
import { portfolioContent } from "@/data/website-text";

export default function PortfolioHero() {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950">
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
                        Explore Art
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black text-white leading-none tracking-tight"
                    >
                        {portfolioContent.title.split(' ')[0]} <br />
                        <span className="text-secondary tracking-tighter">
                            Portfolio.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {portfolioContent.subtitle}
                    </motion.p>
                </div>
            </div>

            {/* Scrolling Decorative Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
                <div className="text-[15rem] font-black text-white whitespace-nowrap animate-marquee flex gap-12">
                    <span>DIGITAL EXPERIENCES</span>
                    <span>CREATIVE DESIGN</span>
                    <span>PRINT MANAGEMENT</span>
                </div>
            </div>
        </section>
    );
}

// Add marquee animation in your globals.css if not present:
/*
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
*/
