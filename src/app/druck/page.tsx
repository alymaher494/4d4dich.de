"use client";

import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Portfolio from "./_components/Portfolio";
import Benefits from "./_components/Benefits";
import DruckContactForm from "@/components/forms/DruckContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export default function DruckPage() {
    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <Intro />
            <Portfolio />
            <Benefits />

            {/* Contact Form Section */}
            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Jetzt unverbindlich anfragen</h2>
                        <p className="text-lg text-slate-600">Schildern Sie uns Ihr Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.</p>
                    </div>
                    <DruckContactForm serviceName="Druck & Werbetechnik" />
                </Container>
            </Section>
        </main>
    );
}
