"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ProcessSectionProps {
    steps: ProcessStep[];
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function ProcessSection({ steps, title = "Unser Prozess", subtitle = "So arbeiten wir gemeinsam an Ihrem Erfolg.", className }: ProcessSectionProps) {
    return (
        <section className={cn("py-24 px-6 md:px-12 bg-white overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                        Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        {title}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden md:block -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center mb-8 mx-auto shadow-lg shadow-slate-100/50 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <span className="text-4xl font-black text-slate-200 group-hover:text-primary transition-colors duration-500">
                                    {step.number}
                                </span>
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
