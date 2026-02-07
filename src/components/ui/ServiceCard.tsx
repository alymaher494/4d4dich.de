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
}

export default function ServiceCard({ title, description, Icon, link, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 group relative overflow-hidden h-full flex flex-col rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="mb-6 inline-block p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative z-10 w-fit">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors relative z-10">
                {title}
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed flex-grow relative z-10">
                {description}
            </p>

            <Link
                href={link}
                className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-3 transition-all relative z-10"
            >
                Mehr erfahren
                <span className="text-lg">→</span>
            </Link>
        </motion.div>
    );
}
