"use client";

import { motion } from "framer-motion";
import { druckContent } from "@/data/website-text";
import { CheckCircle2, Printer, Briefcase, Megaphone, GalleryVertical, Shirt, Gift, CarFront } from "lucide-react";

export default function DruckPortfolio() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute -left-20 top-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-wider">Unser Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4">{druckContent.products.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {druckContent.products.categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 w-fit border border-white/5 group-hover:border-primary/50 transition-colors">
                                {(() => {
                                    const Icon = [Briefcase, Megaphone, GalleryVertical, Shirt, Gift, CarFront][idx] || Printer;
                                    return <Icon className={`w-8 h-8 ${idx % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                            <ul className="space-y-3">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="text-slate-400 flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
