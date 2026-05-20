"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/website-text";
import PortfolioCard from "@/components/cards/PortfolioCard";
import { WPPortfolio, WPCategory, getFeaturedImageUrl, getImageUrl, stripHtml, FALLBACK_IMAGE } from "@/lib/wordpress";

interface PortfolioGridProps {
    initialProjects?: WPPortfolio[];
    initialCategories?: WPCategory[];
}

export default function PortfolioGrid({ initialProjects = [], initialCategories = [] }: PortfolioGridProps) {
    const [activeCategory, setActiveCategory] = useState("all");
    const { categories: staticCategories, projects: staticProjects } = portfolioContent;

    // Use dynamic categories if available, otherwise fallback to static
    const categories = initialCategories.length > 0
        ? [{ id: "all", label: "Alle Projekte" }, ...initialCategories.map(c => ({ id: c.slug, label: c.name }))]
        : staticCategories;

    // Map WordPress projects to the format expected by PortfolioCard
    const wpMappedProjects = initialProjects.map(project => {
        let mainCategory = "Design";
        const terms = project._embedded?.['wp:term'] || [];

        // Find the portfolio_category taxonomy in terms
        const categoryTerm = terms.find(t => t[0]?.taxonomy === 'portfolio_category');
        if (categoryTerm && categoryTerm[0]) {
            mainCategory = categoryTerm[0].name;
        } else if (terms[0] && terms[0][0]) {
            // Fallback to first term if not explicitly found
            mainCategory = terms[0][0].name;
        }

        return {
            id: project.slug,
            title: project.title.rendered,
            category: mainCategory,
            categorySlug: categoryTerm?.[0]?.slug || terms[0]?.[0]?.slug || "design",
            image: getFeaturedImageUrl(project),
            client: stripHtml(project.excerpt.rendered).substring(0, 100),
            year: (project.acf?.project_year as string) || (project.date ? new Date(project.date).getFullYear().toString() : new Date().getFullYear().toString()),
        };
    });

    // Combine or choose between dynamic and static data
    const projects = initialProjects.length > 0 ? wpMappedProjects : staticProjects;

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => {
            const projectCat = (p as any).categorySlug || p.category;
            return projectCat.toLowerCase() === activeCategory.toLowerCase();
        });

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
                                ${activeCategory.toLowerCase() === cat.id.toLowerCase()
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

                {projects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg">Keine Projekte gefunden.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
