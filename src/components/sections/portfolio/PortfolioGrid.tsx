"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/website-text";
import PortfolioCard from "@/components/cards/PortfolioCard";

export default function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState("all");
    const { categories, projects } = portfolioContent;

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section className="py-24 px-6 md:px-12 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-wide
                                ${activeCategory === cat.id
                                    ? "bg-slate-900 text-white shadow-lg scale-105"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <PortfolioCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
