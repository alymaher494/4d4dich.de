"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import "@/components/sections/Gallery.css";

const projects = [
    {
        id: 1,
        title: "E-Commerce Rebranding",
        platform: "Digital Strategy",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&h=800&fit=crop",
        description: "Komplettes Rebranding und Webshop-Entwicklung für einen führenden Online-Händler.",
        gradient: "linear-gradient(135deg, #76BC43 0%, #5A9432 100%)",
        stats: [
            { number: "+200%", label: "Umsatz" },
            { number: "3.5x", label: "ROI" }
        ]
    },
    {
        id: 2,
        title: "Social Media Kampagne",
        platform: "Marketing",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
        description: "Virale Kampagne mit über 200% ROI und signifikantem Community-Wachstum.",
        gradient: "linear-gradient(135deg, #D60D7E 0%, #A10A5F 100%)",
        stats: [
            { number: "500k", label: "Views" },
            { number: "+15k", label: "Fans" }
        ]
    },
    {
        id: 3,
        title: "Corporate Identity",
        platform: "Visual Design",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&h=800&fit=crop",
        description: "Neues, modernes Erscheinungsbild inklusive Logo و Geschäftsausstattung.",
        gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        stats: [
            { number: "100%", label: "New Brand" },
            { number: "4 Wo", label: "Launch" }
        ]
    },
];

export default function HomePortfolio() {
    return (
        <section id="portfolio" className="py-32 bg-white overflow-visible">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.25em] text-sm"
                        >
                            UNSERE REFERENZEN
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 leading-none"
                        >
                            Ausgewählte <br />
                            <span className="text-secondary">Erfolgsgeschichten.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/portfolio" className="btn-primary flex items-center gap-3">
                            Alle Projekte ansehen
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group sticky top-32">
                        <div className="relative h-auto lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                            {/* Background Surface */}
                            <div className="absolute inset-0 bg-slate-900" />

                            {/* Content Grid */}
                            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-full">
                                {/* Text Content */}
                                <div
                                    className="relative z-10 p-12 md:p-20 flex flex-col justify-between text-white"
                                    style={{ background: project.gradient }}
                                >
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-px bg-white/40" />
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">
                                                {project.platform}
                                            </span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl text-white/80 font-light leading-relaxed max-w-md">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                                        {project.stats.map((stat, i) => (
                                            <div key={i}>
                                                <span className="block text-4xl font-black mb-1">{stat.number}</span>
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="relative overflow-hidden h-[300px] lg:h-auto">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-slate-950/20 to-transparent" />

                                    {/* Project Link Float */}
                                    <div className="absolute top-10 right-10">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all cursor-pointer">
                                            <ExternalLink className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
