"use client";

import { motion } from "framer-motion";
import { webAppContent } from "@/data/website-text";
import { Code2, MonitorSmartphone, Globe, Phone, Mail, MapPin } from "lucide-react";

const featureIcons = [MonitorSmartphone, Code2, Globe, Phone, Mail, MapPin];

export default function WebAppFeatures() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-50 ">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-wider">Technologie Stack</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                        Skalierbare Lösungen
                    </h2>
                    <div className="w-24 h-2 bg-secondary rounded-full mx-auto" />
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto pt-4 leading-relaxed">
                        Wir nutzen modernste Technologien für skalierbare und sichere Anwendungen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webAppContent.features.map((feature, idx) => {
                        const Icon = featureIcons[idx % featureIcons.length];
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{feature}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Maßgeschneidert für Ihre Anforderungen und perfekt optimiert für Performance.
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
