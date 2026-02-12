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
            className="group relative h-full bg-white rounded-2xl p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(214,13,126,0.3)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden"
        >
            {/* Background Image on Hover */}
            {image && (
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#D60D7E]/90 mix-blend-multiply" />
                </div>
            )}

            {/* Fallback solid pink background if no image, or as base transition */}
            <div className={`absolute inset-0 z-0 bg-[#D60D7E] opacity-0 ${!image ? 'group-hover:opacity-100' : ''} transition-opacity duration-300`} />

            <div className="flex flex-col h-full relative z-10 w-full">
                <div className="mb-6 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 origin-left">
                    <Icon strokeWidth={1.5} className="w-12 h-12" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed text-base flex-grow group-hover:text-white/90 transition-colors duration-300">
                    {description}
                </p>

                <Link
                    href={link}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-[#D60D7E] transition-all duration-300 ml-auto"
                >
                    <span className="sr-only">Mehr erfahren</span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}
