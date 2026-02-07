"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/data/website-text";

export default function VisionSection() {
    const { vision_section } = homeContent;

    return (
        <section className="section-padding bg-slate-900 text-white relative overflow-hidden py-24 px-4 md:px-8">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -z-0" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Unsere Vision & Philosophie
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                        {vision_section.intro}
                    </p>
                </div>

                <div className="space-y-6">
                    {vision_section.processes.map((process, index) => (
                        <motion.div
                            key={process.number}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-4xl font-bold text-primary opacity-50">{process.number}</span>
                            <div className="space-y-1">
                                <h4 className="text-xl font-bold text-white">{process.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{process.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
