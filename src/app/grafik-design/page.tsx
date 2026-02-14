"use client";

import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import WhyUs from "./_components/WhyUs";
import { grafikDesignContent } from "@/data/website-text";
import GrafikDesignContactForm from "@/components/forms/GrafikDesignContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export default function GrafikDesignPage() {
    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <Intro />
            <WhyUs />

            {/* Custom CTA Text */}
            <Section>
                <Container size="narrow" className="text-center relative">
                    <span className="text-9xl text-slate-100 absolute -top-10 -left-10 font-serif">"</span>
                    <p className="text-3xl md:text-4xl font-black text-slate-800 leading-tight relative z-10">
                        {grafikDesignContent.cta}
                    </p>
                </Container>
            </Section>

            {/* Contact Form Section */}
            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Starten wir Ihr Design-Projekt</h2>
                        <p className="text-lg text-slate-600">Erzählen Sie uns von Ihrer Vision. Wir setzen sie um.</p>
                    </div>
                    <GrafikDesignContactForm serviceName="Grafik & Design" />
                </Container>
            </Section>
        </main>
    );
}
