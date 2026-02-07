"use client";

import { Printer, Layout, Globe, BarChart3 } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { homeContent } from "@/data/website-text";

const icons = [Printer, Layout, Globe, BarChart3];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-surface/50">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Unsere Leistungen</h2>
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
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
