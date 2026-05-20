"use client";

import { motion } from "framer-motion";
import { Users, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/wordpress";

interface Metric {
    value: string;
    label: string;
}

interface HomeAboutProps {
    badge?: string;
    title?: string;
    description?: string;
    metrics?: Metric[];
    image1?: string;
    image2?: string;
}

export default function HomeAbout({
    badge,
    title,
    description,
    metrics,
    image1,
    image2
}: HomeAboutProps) {
    const defaultMetrics = [
        { value: "100%", label: "Zufriedenheit" },
        { value: "550+", label: "Projekte" }
    ];

    const displayMetrics = metrics && metrics.length >= 2 ? metrics : defaultMetrics;

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
                        <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                            <Image
                                src={getImageUrl(image1) || "/images/assets/5299fcd9db7aa5acc5c9774aaadf35bc.webp"}
                                alt="Strategy Session"
                                fill
                                sizes="(max-width: 768px) 45vw, 25vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Metric Card 1: Top-Right (Green) */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-secondary flex flex-col items-center justify-center p-6 text-white text-center shadow-lg shadow-primary/20">
                            <Trophy className="w-10 h-10 md:w-14 md:h-14 mb-4" />
                            <span className="text-3xl md:text-5xl font-black mb-1">{displayMetrics[0].value}</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90">{displayMetrics[0].label}</span>
                        </div>

                        {/* Metric Card 2: Bottom-Left (Light Grey) */}
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-white flex flex-col items-center justify-center p-6 text-slate-900 text-center shadow-xl">
                            <Users className="w-10 h-10 md:w-14 md:h-14 mb-4 text-primary" />
                            <span className="text-3xl md:text-5xl font-black mb-1">{displayMetrics[1].value}</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">{displayMetrics[1].label}</span>
                        </div>

                        {/* Image 2: Bottom-Right */}
                        <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                            <Image
                                src={getImageUrl(image2) || "/images/assets/46ef2f5401a6c30e91690df50ceb841e.webp"}
                                alt="Team Work"
                                fill
                                sizes="(max-width: 768px) 45vw, 25vw"
                                className="object-cover"
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
                                {badge || "LERNEN SIE UNS KENNEN"}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]"
                            >
                                {title || "Wir gestalten die Zukunft"}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 leading-relaxed font-light"
                            >
                                {description || "Wir sind eine familiengeführte Marketingagentur mit einem erfahrenen Team. Gemeinsam begleiten wir Sie Schritt für Schritt auf Ihrem Weg zum Erfolg. Wir verbinden kreatives Design mit datengetriebenen Strategien, um außergewöhnliche Ergebnisse zu erzielen."}
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Pünktlichkeit Und Termingerechte Umsetzung",
                                "Effektive Kommunikation Und Grenzenlose Geduld",
                                "Qualitätsgarantie För Unsere Dienstleistungen Und Produkte",
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
                                    <div className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform p-3">
                                        <Image src="/00.png" alt="Icon" fill sizes="48px" className="object-contain p-3" />
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
