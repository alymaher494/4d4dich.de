"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { fadeInUp } from "@/lib/animations";

export default function MarketingHero() {
    return (
        <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-slate-900 text-white">
            <AmbientBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md">
                        <TrendingUp className="w-4 h-4" />
                        Growth Hacking
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Marketing, das <br />
                        <span className="text-secondary">
                            wirkt.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        Effektive Online-Kampagnen, SEO, Social Media und Content-Marketing-Strategien zur Steigerung Ihres Unternehmenserfolgs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Abstract Chart Visualization */}
                    <div className="aspect-square bg-white rounded-[3rem] shadow-2xl p-8 relative border border-slate-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white -z-10" />

                        {/* Floating Card 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                            className="absolute top-10 left-10 right-10 p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between z-20"
                        >
                            <div>
                                <span className="text-sm text-slate-400 font-medium">Conversion Rate</span>
                                <span className="block text-3xl font-black text-slate-900">+124%</span>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                        </motion.div>

                        {/* Bar Chart Visualization */}
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-end justify-center gap-4 px-8 pb-8">
                            {[40, 65, 45, 80, 55, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t-xl opacity-80 hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
