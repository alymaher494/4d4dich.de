"use client";

import { motion } from "framer-motion";
import { webAppContent } from "@/data/website-text";
import { Code2, MonitorSmartphone, Globe, Phone, Mail, MapPin } from "lucide-react";

const featureIcons = [MonitorSmartphone, Code2, Globe, Phone, Mail, MapPin];

export default function WebAppFeatures() {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Technologie Stack</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                                    <Icon className="w-7 h-7 text-slate-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature}</h3>
                                <p className="text-slate-500 font-medium">State-of-the-art solution</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
