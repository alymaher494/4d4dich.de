"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface PricingItem {
    name: string;
    price: string;
}

interface PricingProps {
    items?: PricingItem[];
    title?: string;
    description?: string;
}

export default function Pricing({ items, title = "Unsere Preise", description = "Transparente Konditionen für Ihren Erfolg." }: PricingProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Investition</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4">{title}</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl">
                        <div className="space-y-6">
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    {...fadeInUp}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex justify-between items-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <span className="text-xl font-bold text-slate-800">{item.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-primary">{item.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center text-slate-400 text-sm">
                            * Alle Preise sind Richtwerte und können je nach Projektaufwand variieren.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
