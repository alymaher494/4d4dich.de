"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/data/website-text";
import { Stethoscope, Utensils, Users, Building2 } from "lucide-react";

const sectorImages = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=600&fit=crop", // Healthcare
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=600&fit=crop", // Gastronomy
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=600&fit=crop", // B2C
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=600&fit=crop"  // B2B
];

const icons = [Stethoscope, Utensils, Users, Building2];

export default function SectorsGrid() {
    return (
        <section className="section-padding bg-slate-900 py-24 md:py-32 relative overflow-hidden my-12 mx-4 md:mx-8 rounded-[3rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,188,67,0.15),transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                        Unsere Einsatzgebiete
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                        Branchen &{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Lösungen
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Maßgeschneiderte Marketinglösungen für verschiedene Geschäftsbereiche.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {homeContent.sectors.map((sector, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={sector.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image */}
                                <img
                                    src={sectorImages[index % sectorImages.length]}
                                    alt={sector.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900/90 transition-opacity group-hover:opacity-90" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                        {sector.name}
                                    </h3>

                                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {sector.description}
                                    </p>

                                    <div className="h-1 w-12 bg-primary mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
