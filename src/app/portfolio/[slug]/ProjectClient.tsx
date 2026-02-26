"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Layers, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ProjectClient({ project }: { project: any }) {
    if (!project) return null;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Zurück zum Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">{project.category}</span>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {project.subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 gap-8 text-sm border-l-2 border-slate-200 pl-8"
                        >
                            {project.client && (
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Kunde</h4>
                                    <p className="text-slate-600">{project.client}</p>
                                </div>
                            )}
                            {project.year && (
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Jahr</h4>
                                    <p className="text-slate-600">{project.year}</p>
                                </div>
                            )}
                            {project.services && project.services.length > 0 && (
                                <div className="col-span-2">
                                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Layers className="w-4 h-4 text-primary" /> Leistungen</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.services.map((s: string, i: number) => (
                                            <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs text-slate-600">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Main Image */}
                    {project.images && project.images.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-video"
                        >
                            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                        </motion.div>
                    )}

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {project.challenge && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-10 rounded-[2.5rem] space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-slate-900">Die Herausforderung</h3>
                                <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                                    {project.challenge}
                                </p>
                            </motion.div>
                        )}
                        {project.solution && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 text-white p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden"
                                style={{ gridColumn: !project.challenge ? 'span 2' : 'auto' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                                <h3 className="text-2xl font-bold text-white relative z-10">Unsere Lösung</h3>
                                <div className="text-slate-300 leading-relaxed text-lg relative z-10 whitespace-pre-line prose prose-invert prose-p:text-slate-300">
                                    <div dangerouslySetInnerHTML={{ __html: project.solution }} />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Results Stats */}
                    {project.results && project.results.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {project.results.map((res: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                        {res.value}
                                    </div>
                                    <div className="text-slate-600 font-medium flex items-center justify-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-slate-400" />
                                        {res.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Gallery Grid */}
                    {project.images && project.images.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.images.slice(1).map((img: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="rounded-[2.5rem] overflow-hidden shadow-lg h-96 relative group"
                                >
                                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </motion.div>
                            ))}
                        </div>
                    )}

                </div>
            </section>

            <ContactCTA />
        </div>
    );
}
