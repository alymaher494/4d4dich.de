"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { webAppContent } from "@/data/website-text";
import { fadeInUp } from "@/lib/animations";

export default function WebAppHero() {
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
                        <Code2 className="w-4 h-4 inline-block mr-2" />
                        Development
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Digital, das <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            verbindet.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        {webAppContent.intro}
                    </p>
                </motion.div>

                <div className="relative perspective-1000">
                    {/* Abstract Laptop/Mobile Mockup */}
                    <motion.div
                        initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
                        animate={{ rotateX: 10, rotateY: -10, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full aspect-[4/3] bg-slate-900 rounded-[2rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black" />
                        <div className="grid grid-cols-2 gap-4 p-8">
                            <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
                            <div className="h-32 bg-white/10 rounded-xl" />
                            <div className="h-64 col-span-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
                        </div>
                    </motion.div>

                    {/* Floating Code Snippet */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-10 -right-10 bg-black/90 p-6 rounded-2xl border border-white/20 text-xs font-mono text-primary shadow-2xl backdrop-blur-md"
                    >
                        <span className="block opacity-50">// Building the future</span>
                        <span className="block text-white">const solution = new Future();</span>
                        <span className="block text-secondary">await solution.deploy();</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
