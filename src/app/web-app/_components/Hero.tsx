"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Cpu, Globe, Smartphone } from "lucide-react";
import Link from "next/link";

import { WPPage } from "@/lib/wordpress";

interface HeroProps {
    initialData?: WPPage | null;
}

export default function WebAppHero({ initialData }: HeroProps) {
    const title = initialData?.acf?.hero_title || (initialData?.title?.rendered ? `${initialData.title.rendered}.` : "entwickeln.");
    const description = initialData?.acf?.hero_description || "Individuelle Softwarelösungen, die Geschäftsprozesse digitalisieren و Benutzer begeistern. Von CRM bis zur Industrie 4.0.";

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 lg:pb-0 overflow-visible lg:overflow-hidden bg-[#020617]">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
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
                        <Code2 className="w-4 h-4" />
                        Development Studio
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-[1.1]"
                    >
                        {initialData?.acf?.hero_title_prefix || "Digital, das"} <br />
                        <span className="text-secondary">{title}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-lg leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/kontakt" className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 hover:bg-secondary transition-all group">
                            Projekt starten
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#portfolio" className="px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all">
                            Referenzen
                        </Link>
                    </motion.div>

                    {/* Tech Stack Marquee (Small) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 border-t border-white/5"
                    >
                        <p className="text-slate-500 text-sm mb-4">Powered by modern Tech:</p>
                        <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((tech) => (
                                <span key={tech} className="text-slate-400 font-mono text-sm">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Code Visual / 3D Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative mt-12 lg:mt-0"
                >
                    <div className="relative z-10 bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl p-6 md:p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 border-t-primary/20">
                        {/* Fake Browser Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="bg-slate-800/50 px-3 py-1 rounded text-xs text-slate-500 font-mono mx-auto">
                                future_builder.ts
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="font-mono text-sm md:text-base leading-relaxed">
                            <div className="flex gap-4">
                                <span className="text-slate-700 select-none">1</span>
                                <span className="text-slate-500">// Building the future</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-700 select-none">2</span>
                                <div>
                                    <span className="text-purple-400">const</span>{' '}
                                    <span className="text-blue-400">solution</span>{' '}
                                    <span className="text-slate-400">=</span>{' '}
                                    <span className="text-purple-400">new</span>{' '}
                                    <span className="text-yellow-400">Future</span>
                                    <span className="text-slate-400">();</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-700 select-none">3</span>
                                <div>
                                    <span className="text-purple-400">await</span>{' '}
                                    <span className="text-blue-400">solution</span>
                                    <span className="text-slate-400">.</span>
                                    <span className="text-blue-400">deploy</span>
                                    <span className="text-slate-400">();</span>
                                </div>
                            </div>
                            <div className="flex gap-4 animate-pulse">
                                <span className="text-slate-700 select-none">4</span>
                                <span className="text-primary">_</span>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div >
                                <p className="text-xs opacity-80">System Status</p>
                                <p className="font-bold">100% Ready</p>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Glow under card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 transform translate-y-4" />
                </motion.div>

            </div>
        </section>
    );
}


