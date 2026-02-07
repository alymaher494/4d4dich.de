"use client";

import { motion } from "framer-motion";
import { homeContent, siteInfo } from "@/data/website-text";
import { CheckCircle2, Users, Trophy, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
    const { about_section } = homeContent;

    return (
        <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Image Side (Conceptual & Premium) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=1000&fit=crop"
                                alt="Modern Office"
                                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-10 -right-10 z-20 glass-card p-8 md:p-10 max-w-[280px]"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-black text-slate-900 leading-none">100%</span>
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Qualität</span>
                                    </div>
                                </div>
                                <div className="h-px bg-slate-100" />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-black text-slate-900 leading-none">+500</span>
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Kunden</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Experience Badge */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-900 rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-2xl z-20">
                            <span className="text-3xl font-black leading-none">5+</span>
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Jahre Erfolg</span>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-black uppercase tracking-[0.25em] text-sm"
                            >
                                {about_section.title}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]"
                            >
                                Wir geben Ihrer Vision ein <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
                                    digitales Zuhause.
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
                        >
                            {about_section.description} Wir verbinden deutsches Qualitätsbewusstsein mit innovativen Marketingstrategien, um Ihr Unternehmen an die Spitze zu bringen.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {about_section.features.slice(0, 4).map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-6 flex flex-wrap gap-6 items-center"
                        >
                            <Link href="/kontakt" className="btn-primary">
                                Mehr erfahren
                            </Link>
                            <Link
                                href={`https://wa.me/${siteInfo.social.whatsapp}`}
                                className="flex items-center gap-3 text-slate-900 font-bold hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                Jetzt chatten
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
