"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/data/website-text";
import { User2 } from "lucide-react";

export default function TeamSection() {
    const { team } = homeContent;

    return (
        <section id="team" className="section-padding bg-white">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                    {team.title}
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
                    Lernen Sie unsere Experten kennen
                </h3>
                <p className="text-slate-600 italic max-w-2xl mx-auto text-lg">
                    "{team.quote}"
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-6 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10">
                            {/* Actual Team Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Brand Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                                <span className="text-sm font-medium uppercase tracking-wider">{member.role}</span>
                                <h4 className="text-xl font-bold">{member.name}</h4>
                            </div>
                        </div>
                        <div className="text-center group-hover:hidden transition-all duration-300">
                            <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                            <p className="text-slate-500 text-sm">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
