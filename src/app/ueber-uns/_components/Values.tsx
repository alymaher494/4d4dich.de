"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface ValuesProps {
    acf?: any;
    title?: string;
}

export default function AboutValues({ acf, title }: ValuesProps) {
    const values = [
        {
            title: acf?.about_value_1_title || "Transparenz",
            desc: acf?.about_value_1_desc || "Keine versteckten Kosten. Offene Kommunikation ist unser Fundament.",
            icon: ShieldCheck,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: acf?.about_value_2_title || "Qualität",
            desc: acf?.about_value_2_desc || "Perfektion im Detail. Ob Druck oder Pixel – wir liefern Exzellenz.",
            icon: Heart,
            color: "text-secondary",
            bg: "bg-secondary/10"
        },
        {
            title: acf?.about_value_3_title || "Schnelligkeit",
            desc: acf?.about_value_3_desc || "Ihre Zeit ist wertvoll. Wir halten Deadlines strikt ein.",
            icon: Zap,
            color: "text-primary",
            bg: "bg-primary/10"
        }
    ];
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="text-primary font-black uppercase tracking-widest text-sm">Unsere Werte</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-tight">
                        {title || <>Menschlich. <span className="text-secondary">Kreativ.</span> Exzellent.</>}
                    </h2>
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
