"use client";

import WebAppHero from "@/components/sections/web-app/WebAppHero";
import WebAppFeatures from "@/components/sections/web-app/WebAppFeatures";
import WebAppEcommerce from "@/components/sections/web-app/WebAppEcommerce";
import ProcessSection from "@/components/sections/ProcessSection";
import BriefingForm from "@/components/forms/BriefingForm";

export default function WebAppPage() {
    const processSteps = [
        {
            number: "01",
            title: "Analyse",
            description: "Wir verstehen Ihre Ziele, Zielgruppe und Anforderungen, um die perfekte Strategie zu entwickeln."
        },
        {
            number: "02",
            title: "Design",
            description: "Wir erstellen intuitive Wireframes und atemberaubende UI-Designs, die Ihre Marke widerspiegeln."
        },
        {
            number: "03",
            title: "Entwicklung",
            description: "Unsere Experten programmieren Ihre Anwendung mit modernsten Technologien für maximale Performance."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <WebAppHero />
            <WebAppFeatures />
            <WebAppEcommerce />

            <ProcessSection steps={processSteps} title="Der Weg zur App" subtitle="Vom Konzept zum fertigen Produkt in 3 Schritten." />

            {/* Briefing Form Section */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Starten wir Ihr Projekt</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Beantworten Sie uns ein paar Fragen, damit wir Ihnen ein perfektes Angebot erstellen können.</p>
                    </div>
                    <BriefingForm />
                </div>
            </section>
        </main>
    );
}
