"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, PenTool, Layout, Layers, Wand2 } from "lucide-react";
import Link from "next/link";

export default function GrafikDesignHero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 overflow-hidden bg-[#020617]">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider"
                    >
                        <Wand2 className="w-4 h-4" />
                        Creative Studio
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-[1.1]"
                    >
                        Design, das <br />
                        <span className="text-secondary bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">begeistert.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-lg leading-relaxed"
                    >
                        Wir gestalten Markenidentitäten, die im Gedächtnis bleiben. Vom Logo bis zum kompletten Corporate Design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/kontakt" className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 hover:bg-secondary transition-all group">
                            Design anfragen
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#portfolio" className="px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all">
                            Portfolio
                        </Link>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 border-t border-white/5"
                    >
                        <div className="flex gap-4">
                            {['Ps', 'Ai', 'Id', 'Fi'].map((tool) => (
                                <div key={tool} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm hover:bg-purple-500 hover:border-purple-500 transition-colors cursor-default">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Creative Visual */}
                <motion.div
                    initial={{ opacity: 0, rotate: 5 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative hidden lg:block"
                >
                    {/* Artboard Stack */}
                    <div className="relative z-10 w-full aspect-square max-w-md mx-auto">

                        {/* Back Card (Wireframe) */}
                        <div className="absolute inset-0 bg-slate-900 rounded-3xl border border-slate-700 transform rotate-6 scale-95 opacity-50 translate-x-4" />

                        {/* Middle Card (Colors) */}
                        <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-600 transform -rotate-3 scale-95 origin-bottom-left overflow-hidden">
                            <div className="grid grid-cols-2 h-full">
                                <div className="bg-purple-500/20" />
                                <div className="bg-orange-500/20" />
                            </div>
                        </div>

                        {/* Front Card (Main Design) */}
                        <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden p-6 flex flex-col">
                            {/* Fake UI Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                                </div>
                                <div className="h-2 w-20 bg-slate-100 rounded-full" />
                            </div>

                            {/* Brand Content */}
                            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-orange-500 flex items-center justify-center text-white shadow-lg">
                                    <PenTool className="w-10 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-4 w-32 bg-slate-100 rounded-full mx-auto" />
                                    <div className="h-3 w-24 bg-slate-50 rounded-full mx-auto" />
                                </div>
                            </div>

                            {/* Color Palette Footer */}
                            <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between">
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 shadow-sm" />
                                    <div className="w-8 h-8 rounded-full bg-orange-500 shadow-sm" />
                                    <div className="w-8 h-8 rounded-full bg-slate-900 shadow-sm" />
                                </div>
                                <div className="text-xs font-bold text-slate-300 flex items-center">
                                    #BRANDING
                                </div>
                            </div>
                        </div>

                        {/* Floating Typography Element */}
                        <div className="absolute -right-8 top-12 bg-slate-900 text-white p-4 rounded-xl shadow-xl animate-bounce-slow border border-white/10">
                            <span className="text-4xl font-serif italic">Aa</span>
                        </div>

                        {/* Floating Layer Element */}
                        <div className="absolute -left-8 bottom-20 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl animate-pulse">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


