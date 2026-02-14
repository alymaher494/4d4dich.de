"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Users, Globe, Target } from "lucide-react";
import Link from "next/link";

export default function MarketingHero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 overflow-hidden bg-[#020617]">
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
                        <TrendingUp className="w-4 h-4" />
                        Growth Agency
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-[1.1]"
                    >
                        Marken, die <br />
                        <span className="text-secondary">wachsen.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-lg leading-relaxed"
                    >
                        Datengetriebenes Marketing, das Ihre Zielgruppe erreicht und Umsätze steigert. Von SEO bis Social Media.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/kontakt" className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 hover:bg-secondary transition-all group">
                            Strategiegespräch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#portfolio" className="px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all">
                            Case Studies
                        </Link>
                    </motion.div>

                    {/* Platforms Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 border-t border-white/5"
                    >
                        <p className="text-slate-500 text-sm mb-4">Plattformen & Tools:</p>
                        <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {['Google Ads', 'Meta', 'TikTok', 'LinkedIn', 'Analytics'].map((platform) => (
                                <span key={platform} className="text-slate-400 font-bold text-sm tracking-wide">{platform}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Dashboard Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 md:p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Campaign Overview</h3>
                                    <p className="text-xs text-slate-500">Last 30 Days</p>
                                </div>
                            </div>
                            <div className="text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full">+127% ROI</div>
                        </div>

                        {/* Chart Area Mock */}
                        <div className="h-48 flex items-end justify-between gap-2 mb-8 px-2">
                            {[30, 45, 35, 60, 50, 75, 65, 85, 70, 95].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 rounded-t-sm hover:bg-primary transition-colors relative group" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h * 124}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-4 h-4 text-secondary" />
                                    <span className="text-xs text-slate-400">Total Reach</span>
                                </div>
                                <p className="text-xl font-black text-white">2.4M+</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs text-slate-400">Conversions</span>
                                </div>
                                <p className="text-xl font-black text-white">12.8k</p>
                            </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute -top-6 -right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs opacity-60 font-bold">New Traffic Source</p>
                                <p className="font-bold text-sm">Viral Campaign Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full transfrom translate-y-10" />
                </motion.div>
            </div>
        </section>
    );
}
