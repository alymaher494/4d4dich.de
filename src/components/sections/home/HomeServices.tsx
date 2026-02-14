"use client";

import { motion } from "framer-motion";
import { Compass, Users, LifeBuoy, PieChart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Druck:",
        description: "Hochwertiger Druck für Werbematerialien, Broschüren und Visitenkarten in perfekter Qualität.",
        icon: Compass,
        link: "/druck",
    },
    {
        id: "02",
        title: "Design",
        description: "Kreative Grafikdesigns, die Ihre Marke einzigartig präsentieren und Kunden begeistern.",
        icon: Users,
        link: "/grafik-design",
    },
    {
        id: "03",
        title: "Web & App Design",
        description: "Individuelle App-Webseite Entwicklung, mit modernem Design und benutzerfreundlicher Struktur.",
        icon: LifeBuoy,
        link: "/web-app",
    },
    {
        id: "04",
        title: "Digital Marketing",
        description: "Effektive Online-Kampagnen, CEO, Social Media und Content-Marketing-Strategien.",
        icon: PieChart,
        link: "/marketing",
    },
];

export default function HomeServices() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link href={service.link} className="block relative h-full">
                                <div className="h-full rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group-hover:bg-secondary group-hover:border-secondary relative overflow-hidden flex flex-col justify-between">

                                    {/* Circuit/Tech Pattern Overlay (Opacity handled on hover) */}
                                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #000 0, transparent 50%)' }}
                                    />

                                    <div>
                                        {/* Icon Bubble */}
                                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-secondary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                                            <service.icon className="w-8 h-8" />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3 mb-8">
                                            <h3 className="text-2xl font-bold text-primary transition-colors group-hover:text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium transition-colors group-hover:text-white/90">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Arrow Button */}
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-secondary shadow-md group-hover:shadow-lg">
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </div>

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
                    <Link href="/dienstleistungen" className="inline-flex items-center gap-4 px-10 py-5 rounded-full border-1 bg-primary text-white font-bold hover:bg-secondary hover:text-white transition-all group">
                        Alle Leistungen ansehen
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
