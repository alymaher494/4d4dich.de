"use client";

import { motion } from "framer-motion";
import { Printer, Palette, Globe, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Druck",
        description: "Hochwertige Printergebnisse auf exklusiven Materialien – von Visitenkarten bis zum Großformat.",
        icon: Printer,
        link: "/druck",
        bg: "bg-secondary/5",
        accent: "text-secondary",
    },
    {
        id: "02",
        title: "Design",
        description: "Visuelle Konzepte, die begeistern. Wir entwickeln Markenidentitäten mit Charakter و Stil.",
        icon: Palette,
        link: "/grafik-design",
        bg: "bg-secondary/5",
        accent: "text-secondary",
    },
    {
        id: "03",
        title: "Web & App",
        description: "Maßgeschneiderte digitale Erlebnisse. Wir bauen Webseiten, die konvertieren و Apps, die funktionieren.",
        icon: Globe,
        link: "/web-app",
        bg: "bg-primary/10",
        accent: "text-primary",
    },
    {
        id: "04",
        title: "Marketing",
        description: "Erfolg ist kein Zufall. Wir steigern Ihre Sichtbarkeit durch datengetriebene Marketingstrategien.",
        icon: TrendingUp,
        link: "/marketing",
        bg: "bg-secondary/10",
        accent: "text-secondary",
    },
];

export default function HomeServices() {
    return (
        <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                    <div className="max-w-3xl space-y-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-black uppercase tracking-[0.25em] text-sm"
                        >
                            Exzellenz als Standard
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black text-slate-900 leading-none"
                        >
                            Unsere <br />
                            <span className="text-secondary">Meisterleistungen.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500 max-w-sm text-lg leading-relaxed font-light"
                    >
                        Wir kombinieren traditionelle Qualität mit modernster Technologie für Ihren Erfolg im digitalen Zeitalter.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={service.link} className="block relative">
                                <div className={`p-12 h-full rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5 group-hover:-translate-y-2 relative overflow-hidden`}>
                                    {/* Service ID Background */}
                                    <span className="absolute top-8 right-12 text-8xl font-black text-slate-50 opacity-[0.03] select-none group-hover:text-secondary/10 transition-colors">
                                        {service.id}
                                    </span>

                                    <div className="space-y-8 relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center ${service.accent} transition-transform duration-500 group-hover:scale-110`}>
                                            <service.icon className="w-8 h-8" />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-3xl font-black text-slate-900 group-hover:text-secondary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-md">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 text-secondary font-bold tracking-wide pt-4">
                                            <span className="text-sm uppercase tracking-widest">Detail-Ansicht</span>
                                            <div className="w-12 h-px bg-slate-200 group-hover:w-20 group-hover:bg-secondary transition-all duration-500" />
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-0 left-0 w-full h-[6px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <Link href="/dienstleistungen" className="inline-flex items-center gap-4 px-10 py-5 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all group">
                        Alle Leistungen ansehen
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
