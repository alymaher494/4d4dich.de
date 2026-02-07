import "@/components/sections/Gallery.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        platform: "E-Commerce Rebranding",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
        description: "Komplettes Rebranding und Webshop-Entwicklung für einen führenden Online-Händler.",
        gradient: "linear-gradient(135deg, #76BC43 0%, #0891b2 100%)", // Green to Cyan/Teal
        textColor: "white",
        stats: [
            { number: "+200%", label: "Umsatzsteigerung" },
            { number: "3.5x", label: "ROI" }
        ]
    },
    {
        id: 2,
        platform: "Social Media Kampagne",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        description: "Virale Kampagne mit über 200% ROI und signifikantem Community-Wachstum.",
        gradient: "linear-gradient(135deg, #D60D7E 0%, #F59E0B 100%)", // Pink to Orange
        textColor: "white",
        stats: [
            { number: "500k", label: "Reichweite" },
            { number: "+15k", label: "Neue Follower" }
        ]
    },
    {
        id: 3,
        platform: "Corporate Identity",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop",
        description: "Neues, modernes Erscheinungsbild inklusive Logo, Visitenkarten und Geschäftsausstattung.",
        gradient: "linear-gradient(135deg, #0f172a 0%, #4338ca 100%)", // Dark Slate to Indigo
        textColor: "white",
        stats: [
            { number: "100%", label: "Neues Design" },
            { number: "4 Wochen", label: "Projektdauer" }
        ]
    },
    {
        id: 4,
        platform: "SEO Optimierung",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&h=600&fit=crop",
        description: "Platz 1 Rankings für die wichtigsten Keywords in nur 3 Monaten.",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #be123c 100%)", // Orange to Rose/Red
        textColor: "white",
        stats: [
            { number: "#1", label: "Google Ranking" },
            { number: "+300%", label: "Organischer Traffic" }
        ]
    },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="stacked-gallery">
            <div className="text-center mb-16 md:mb-24 px-4">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                    Unsere Referenzen
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                    Ausgewählte{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Erfolgsgeschichten
                    </span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    Echte Ergebnisse für echte Kunden. Sehen Sie selbst, was wir leisten können.
                </p>
            </div>

            <div className="stacked-gallery__container">
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className="stacked-gallery__card"
                        style={{
                            top: `calc(6rem + ${index * 2}rem)`, // Stacking offset
                        }}
                    >
                        <div
                            className="stacked-gallery__card-inner"
                            style={{
                                background: project.gradient,
                                color: project.textColor
                            }}
                        >
                            <div className="stacked-gallery__card-image">
                                <img
                                    src={project.image}
                                    alt={project.platform}
                                    className="stacked-gallery__card-img"
                                    loading="lazy"
                                />
                            </div>

                            <div className="stacked-gallery__card-content">
                                <span className="stacked-gallery__card-platform">{project.platform}</span>
                                <p className="stacked-gallery__card-description">{project.description}</p>

                                <div
                                    className="stacked-gallery__stats-grid"
                                    style={{ borderTopColor: project.textColor === 'black' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}
                                >
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className="stacked-gallery__stat">
                                            <span className="stacked-gallery__stat-number">{stat.number}</span>
                                            <span className="stacked-gallery__stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link href="/portfolio" className="btn-animated-outline btn-animated-lg">
                    Alle Projekte ansehen
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
