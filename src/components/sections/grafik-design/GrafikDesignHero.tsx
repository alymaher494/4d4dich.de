"use client";

import { motion } from "framer-motion";
import { grafikDesignContent } from "@/data/website-text";
import { Palette, Sparkles } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { fadeInUp } from "@/lib/animations";

export default function GrafikDesignHero() {
    return (
        <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-slate-900 text-white">
            <AmbientBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                        Creative Studio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Design, das <br />
                        <span className="text-secondary">
                            begeistert.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        {grafikDesignContent.page_title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-primary to-secondary p-1 shadow-2xl rotate-3">
                        <div className="w-full h-full bg-slate-900 rounded-[2.8rem] flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                            <Palette className="w-40 h-40 text-white relative z-10 drop-shadow-lg" />
                        </div>
                    </div>
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100"
                    >
                        <div className="bg-primary/10 p-3 rounded-2xl">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-slate-900">100%</span>
                            <span className="text-sm text-slate-500 font-medium">Kreativität</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
