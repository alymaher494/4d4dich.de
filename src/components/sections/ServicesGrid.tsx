"use client";

import { Printer, Layout, Globe, BarChart3 } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { homeContent } from "@/data/website-text";

const icons = [Printer, Layout, Globe, BarChart3];
const images = [
    "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&h=600&fit=crop", // Print
    "https://images.unsplash.com/photo-1626785774573-4b7993143d2d?w=800&h=600&fit=crop", // Design
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop", // Web
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop"  // Marketing
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-surface/50">
            <div className="text-center mb-16 space-y-4">
                <span className="inline-block text-sm font-black text-primary uppercase tracking-[0.2em] mb-2">
                    WAS WIR TUN
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900">Unsere Leistungen</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    Wir bieten umfassende Lösungen für Ihr Business – von der ersten Idee bis zum fertigen Produkt.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {homeContent.services_cards.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        {...service}
                        Icon={icons[index % icons.length]}
                        image={images[index % images.length]}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
