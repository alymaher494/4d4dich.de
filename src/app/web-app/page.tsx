"use client";

import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Ecommerce from "./_components/Ecommerce";
import Process from "./_components/Process";
import BriefingForm from "@/components/forms/BriefingForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

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
            <Hero />
            <Features />
            <Ecommerce />

            <Process steps={processSteps} title="Der Weg zur App" subtitle="Vom Konzept zum fertigen Produkt in 3 Schritten." />

            {/* Briefing Form Section */}
            <Section background="slate">
                <Container>
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-bold uppercase tracking-wider">BRIEFING</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Starten wir Ihr Projekt</h2>
                        <div className="w-24 h-2 bg-secondary rounded-full mx-auto" />
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto pt-4">Beantworten Sie uns ein paar Fragen, damit wir Ihnen ein perfektes Angebot erstellen können.</p>
                    </div>
                    <BriefingForm />
                </Container>
            </Section>
        </main>
    );
}
