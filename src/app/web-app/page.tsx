"use client";

import WebAppHero from "@/components/sections/web-app/WebAppHero";
import WebAppFeatures from "@/components/sections/web-app/WebAppFeatures";
import WebAppEcommerce from "@/components/sections/web-app/WebAppEcommerce";
import ProcessSection from "@/components/sections/ProcessSection";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

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

            {/* Contact Form Section */}
            <section className="py-24 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Ihr digitales Projekt</h2>
                        <p className="text-lg text-slate-600">Webseite, App oder E-Commerce – wir beraten Sie gerne.</p>
                    </div>
                    <ServiceContactForm serviceName="Web & App Entwicklung" />
                </div>
            </section>
        </main>
    );
}
