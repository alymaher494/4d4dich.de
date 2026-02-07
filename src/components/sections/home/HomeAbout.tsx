"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/data/website-text";
import { CheckCircle2, Users, Trophy, Rocket } from "lucide-react";

export default function AboutSection() {
    const { about_section } = homeContent;

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Image Composition Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop"
                                    alt="Team Meeting"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
                                <Users className="w-10 h-10 text-primary mb-3" />
                                <span className="text-3xl font-black text-slate-900">+50</span>
                                <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Projekte</span>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div className="bg-primary p-6 rounded-3xl shadow-lg shadow-primary/20 flex flex-col items-center text-center text-white">
                                <Trophy className="w-10 h-10 text-white mb-3" />
                                <span className="text-3xl font-black">100%</span>
                                <span className="text-sm text-white/80 font-medium uppercase tracking-wide">Zufriedenheit</span>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&h=700&fit=crop"
                                    alt="Creative Work"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-[100px] -z-10" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 space-y-8"
                >
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                            {about_section.title}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                            Wir gestalten <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                die Zukunft
                            </span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        {about_section.description} Wir verbinden kreatives Design mit datengetriebenen Strategien, um außergewöhnliche Ergebnisse zu erzielen.
                    </p>

                    <div className="space-y-4 pt-4">
                        {about_section.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-lg text-slate-800 font-bold">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-8 pl-4 lg:pl-0">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative z-30">
                                    <img src="https://4d4dich.de/wp-content/uploads/2025/05/1a837603-39e0-4f03-9388-a3eaa8418802-211x300.jpg" alt="Team" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative z-20">
                                    <img src="https://4d4dich.de/wp-content/uploads/2025/06/a82a20dc-a113-48b7-a19e-fb9f8dd91759-217x300.jpg" alt="Team" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative z-10">
                                    <img src="https://4d4dich.de/wp-content/uploads/2025/04/IMG_20250326_053336_375-e1747777778757-273x300.png" alt="Team" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="text-sm font-medium">
                                <span className="block text-slate-900 font-bold">Unser Expertenteam</span>
                                <span className="text-slate-500">Bereit für Ihr Projekt</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
