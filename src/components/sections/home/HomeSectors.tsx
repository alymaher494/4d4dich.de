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
        <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden my-12 mx-6 md:mx-auto max-w-7xl rounded-[3rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,188,67,0.15),transparent_50%)]" />

            <div className="px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <span className="inline-block text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">
                        UNSERE EINSATZGEBIETE
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                        Branchen & Lösungen
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Maßgeschneiderte Marketinglösungen für verschiedene Geschäftsbereiche.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {homeContent.sectors.map((sector, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={sector.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]"
                            >
                                {/* Background Image - VISIBLE ONLY ON HOVER */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                                    <img
                                        src={sectorImages[index % sectorImages.length]}
                                        alt={sector.name}
                                        className="h-full w-full object-cover"
                                    />
                                    {/* Pink Overlay */}
                                    <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="w-16 h-16 rounded-2xl  flex items-center justify-center text-secondary mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-secondary group-hover:scale-110 shadow-sm">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-black text-primary mb-3 transition-colors duration-300 group-hover:text-white">
                                        {sector.name}
                                    </h3>

                                    <p className="text-slate-900 text-lg leading-relaxed font-medium transition-colors duration-300 group-hover:text-white">
                                        {sector.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
