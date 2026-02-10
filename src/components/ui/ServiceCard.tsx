"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    link: string;
    index: number;
    image?: string;
}

export default function ServiceCard({ title, description, Icon, link, index, image }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 group relative overflow-hidden h-full flex flex-col rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-secondary/20 transition-all"
        >
            {/* Hover Image Background */}
            {image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
                </div>
            )}

            {/* Default Pink Overlay (fallback or additional tint) */}
            <div className={`absolute inset-0 bg-secondary/5 opacity-0 ${!image ? 'group-hover:opacity-100' : ''} transition-opacity`} />

            <div className="mb-6 inline-block p-4 rounded-2xl bg-secondary/10 text-primary group-hover:bg-white group-hover:text-secondary transition-colors relative z-10 w-fit">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors relative z-10">
                {title}
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed flex-grow relative z-10 group-hover:text-white/90 transition-colors">
                {description}
            </p>

            <Link
                href={link}
                className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-3 group-hover:text-white transition-all relative z-10"
            >
                Mehr erfahren
                <span className="text-lg">→</span>
            </Link>
        </motion.div>
    );
}
