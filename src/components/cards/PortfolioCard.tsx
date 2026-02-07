"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
    project: {
        id: string;
        title: string;
        category: string;
        image: string;
        client: string;
        year: string;
    };
    index?: number;
}

export default function PortfolioCard({ project, index = 0 }: PortfolioCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <Link href={`/portfolio/${project.id}`} className="block h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 h-full flex flex-col">
                    <div className="relative h-72 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors" />
                        <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm">
                                Case Study ansehen <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
                            <span className="text-slate-400 text-sm">{project.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-500 mt-auto">
                            {project.client}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
