"use client";

import { motion } from "framer-motion";
import { ArrowRight, Printer, Layers, Palette, ScanLine, FileCheck } from "lucide-react";
import Link from "next/link";

import { WPPage } from "@/lib/wordpress";

interface HeroProps {
    initialData?: WPPage | null;
}

export default function DruckHero({ initialData }: HeroProps) {
    const title = initialData?.acf?.hero_title || (initialData?.title?.rendered ? `${initialData.title.rendered}.` : "beeindruckt.");
    const description = initialData?.acf?.hero_description || "Von der Visitenkarte bis zur XL-Außenwerbung. Wir bringen Ihre Marke mit höchster Präzision aufs Papier (und darüber hinaus).";

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 lg:pb-0 overflow-visible lg:overflow-hidden bg-[#020617]">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-magenta-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center text-primary gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-wider"
                    >
                        <Printer className="w-4 h-4 text-primary" />
                        Premium Print Services
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-[1.1]"
                    >
                        {initialData?.acf?.hero_title_prefix || "Druck, der"} <br />
                        <span className="text-transparent bg-primary bg-clip-text">{title}</span>
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
                            Angebot anfordern
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#portfolio" className="px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all">
                            Druckmuster
                        </Link>
                    </motion.div>

                    {/* Tech details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 border-t border-white/5"
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00A3E0] text-[10px] font-bold text-white text-center" title="Cyan">C</span>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E1007A] text-[10px] font-bold text-white text-center" title="Magenta">M</span>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FFF200] text-[10px] font-bold text-slate-900 text-center" title="Yellow">Y</span>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black border border-white/20 text-[10px] font-bold text-white text-center" title="Schwarz">K</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Print Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative mt-12 lg:mt-0"
                >
                    {/* Main Print Card */}
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-1 transition-transform duration-500">
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 h-[400px] flex flex-col justify-between overflow-hidden relative">
                            {/* Abstract Design on Paper */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-[100px]" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-tr-[100px]" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-slate-900 mb-6 flex items-center justify-center">
                                    <Palette className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">PREMIUM</h3>
                                <p className="text-xl text-slate-500 tracking-widest uppercase">Quality Print</p>
                            </div>

                            <div className="relative z-10 flex gap-4">
                                <div className="bg-slate-200/50 px-3 py-1 rounded text-xs font-bold text-slate-600">300 DPI</div>
                                <div className="bg-slate-200/50 px-3 py-1 rounded text-xs font-bold text-slate-600">Silk Finish</div>
                            </div>
                        </div>
                    </div>

                    {/* Stack Effect Behind */}
                    <div className="absolute top-4 left-4 w-full h-full bg-white/10 rounded-2xl border border-white/10 -z-10 rotate-6" />
                    <div className="absolute top-8 left-8 w-full h-full bg-white/5 rounded-2xl border border-white/5 -z-20 rotate-12" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-12 -left-12 z-20 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-slow border border-white/10">
                        <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                            <FileCheck className="w-6 h-6" />
                        </div>
                        <div >
                            <p className="text-xs text-slate-400">Production Status</p>
                            <p className="font-bold">Ready for Print</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


