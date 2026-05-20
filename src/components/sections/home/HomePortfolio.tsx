"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "@/components/sections/Gallery.css";

import { WPPortfolio, getFeaturedImageUrl, getImageUrl, stripHtml } from "@/lib/wordpress";

// Decode HTML entities in titles from WordPress
function decodeHtml(html: string): string {
    return html
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#8211;/g, '–')
        .replace(/&#8212;/g, '—');
}

interface HomePortfolioProps {
    initialProjects?: WPPortfolio[];
    title?: string;
}

const staticProjects = [
    {
        id: "1",
        title: "E-Commerce Rebranding",
        platform: "Digital Strategy",
        image: "/images/assets/0ee62ce93318b45f1c87cece286a857d.jpg",
        description: "Komplettes Rebranding und Webshop-Entwicklung für einen führenden Online-Händler.",
        gradient: "linear-gradient(135deg, #76BC43 0%, #5A9432 100%)",
        stats: [
            { number: "+200%", label: "Umsatz" },
            { number: "3.5x", label: "ROI" }
        ]
    },
    {
        id: "2",
        title: "Social Media Kampagne",
        platform: "Marketing",
        image: "/images/assets/37412e810fcc78c8ecfe8fa8323bdda2.jpg",
        description: "Virale Kampagne mit über 200% ROI und signifikantem Community-Wachstum.",
        gradient: "linear-gradient(135deg, #D60D7E 0%, #A10A5F 100%)",
        stats: [
            { number: "500k", label: "Views" },
            { number: "+15k", label: "Fans" }
        ]
    },
    {
        id: "3",
        title: "Corporate Identity",
        platform: "Visual Design",
        image: "/images/assets/9b2ecc57675024bdc20fb2935cf68ffd.jpg",
        description: "Neues, modernes Erscheinungsbild inklusive Logo و Geschäftsausstattung.",
        gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        stats: [
            { number: "100%", label: "New Brand" },
            { number: "4 Wo", label: "Launch" }
        ]
    },
];

export default function HomePortfolio({ initialProjects = [], title }: HomePortfolioProps) {
    // Map WordPress projects to our component format
    const wpMappedProjects = initialProjects.map((project, idx) => {
        // Generate nice gradients for items without them
        const defaultGradients = [
            "linear-gradient(135deg, #76BC43 0%, #5A9432 100%)",
            "linear-gradient(135deg, #D60D7E 0%, #A10A5F 100%)",
            "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
        ];

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
            title: decodeHtml(project.title.rendered),
            // ... (rest of mapping)
            platform: mainCategory,
            image: getFeaturedImageUrl(project),
            description: stripHtml(project.excerpt.rendered),
            gradient: (project.acf?.gradient as string) || defaultGradients[idx % defaultGradients.length],
            stats: (project.acf?.stats as Array<{ number: string; label: string }>) || [
                { number: "100%", label: "Erfolg" },
                { number: "Case", label: "Study" }
            ]
        };
    });

    const projects = initialProjects.length > 0 ? wpMappedProjects : staticProjects;

    return (
        <section id="portfolio" className="py-32 bg-white overflow-visible">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.25em] text-sm"
                        >
                            UNSERE REFERENZEN
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight"
                        >
                            {title || <>Ausgewählte <br /> <span className="text-secondary">Erfolgsgeschichten.</span></>}
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/portfolio" className="btn-primary flex items-center gap-3">
                            Alle Projekte ansehen
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 md:space-y-10">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group sticky top-20 md:top-28 h-auto"
                        style={{
                            zIndex: index + 1,
                        }}
                    >
                        <div className="relative h-auto lg:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                            {/* Background Surface */}
                            <div className="absolute inset-0 bg-slate-900" />

                            {/* Content Grid */}
                            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-full">
                                {/* Text Content */}
                                <div
                                    className="relative z-10 p-8 md:p-20 flex flex-col justify-between text-white"
                                    style={{ background: project.gradient }}
                                >
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-px bg-white/40" />
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">
                                                {project.platform}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black leading-tight">
                                            {decodeHtml(project.title)}
                                        </h3>
                                        <p className="text-xl text-white/80 font-light leading-relaxed max-w-md">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                                        {project.stats.map((stat, i) => (
                                            <div key={i}>
                                                <span className="block text-3xl md:text-4xl font-black mb-1">{stat.number}</span>
                                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="relative overflow-hidden h-[300px] lg:h-auto">
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={getImageUrl(project.image)}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-l from-slate-950/20 to-transparent" />

                                    {/* Project Link Float */}
                                    <div className="absolute top-10 right-10">
                                        <Link href={`/portfolio/${project.id}`}>
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all cursor-pointer">
                                                <ExternalLink className="w-6 h-6" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
