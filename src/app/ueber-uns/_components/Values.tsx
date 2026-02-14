"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const values = [
    {
        title: "Transparenz",
        desc: "Keine versteckten Kosten. Offene Kommunikation ist unser Fundament.",
        icon: ShieldCheck,
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        title: "Qualität",
        desc: "Perfektion im Detail. Ob Druck oder Pixel – wir liefern Exzellenz.",
        icon: Heart,
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        title: "Schnelligkeit",
        desc: "Ihre Zeit ist wertvoll. Wir halten Deadlines strikt ein.",
        icon: Zap,
        color: "text-primary",
        bg: "bg-primary/10"
    }
];

export default function AboutValues() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Unsere Werte</h2>
                    <p className="text-lg text-slate-600">Was uns antreibt und wie wir arbeiten.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((card, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeInUp}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
                        >
                            <div className={`w-16 h-16 ${card.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                <card.icon className={`w-8 h-8 ${card.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
