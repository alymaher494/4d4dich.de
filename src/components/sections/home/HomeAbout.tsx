"use client";

import { motion } from "framer-motion";
import { homeContent, siteInfo } from "@/data/website-text";
import { CheckCircle2, Users, Trophy, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Subtle frame shadows */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-200/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-200/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Collage Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4 md:gap-6"
                    >
                        {/* Image 1: Top-Left */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                                alt="Strategy Session"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Metric Card 1: Top-Right (Green) */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-secondary flex flex-col items-center justify-center p-6 text-white text-center shadow-lg shadow-primary/20">
                            <Trophy className="w-10 h-10 md:w-14 md:h-14 mb-4" />
                            <span className="text-3xl md:text-5xl font-black mb-1">100%</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90">Zufriedenheit</span>
                        </div>

                        {/* Metric Card 2: Bottom-Left (Light Grey) */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-white flex flex-col items-center justify-center p-6 text-slate-900 text-center shadow-xl">
                            <Users className="w-10 h-10 md:w-14 md:h-14 mb-4 text-primary" />
                            <span className="text-3xl md:text-5xl font-black mb-1">+50</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Projekte</span>
                        </div>

                        {/* Image 2: Bottom-Right */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                                alt="Team Work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content Side */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-black uppercase tracking-[0.25em] text-sm"
                            >
                                LERNEN SIE UNS KENNEN
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]"
                            >
                                Wir gestalten <br />
                                <span className="text-secondary">die Zukunft</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 leading-relaxed font-light"
                            >
                                Wir sind eine familiengeführte Marketingagentur mit einem erfahrenen Team. Gemeinsam begleiten wir Sie Schritt für Schritt auf Ihrem Weg zum Erfolg. Wir verbinden kreatives Design mit datengetriebenen Strategien, um außergewöhnliche Ergebnisse zu erzielen.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Pünktlichkeit Und Termingerechte Umsetzung",
                                "Effektive Kommunikation Und Grenzenlose Geduld",
                                "Qualitätsgarantie Für Unsere Dienstleistungen Und Produkte",
                                "Ständige Innovation Zur Optimierung Ihrer Marketingstrategien"
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
