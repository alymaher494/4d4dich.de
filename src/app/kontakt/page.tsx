"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";
import ContactForm from "@/components/forms/ContactForm";
import FAQ from "./_components/FAQ";
import ContactDetails from "./_components/ContactDetails";
import Map from "./_components/Map";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <InternalPageHero
                badge="Get in Touch"
                title="Sprechen wir"
                highlight="über Erfolg."
                description="Sie haben eine Vision? Wir haben die Expertise. Lassen Sie uns gemeinsam etwas Besonderes schaffen."
                marqueeText={["CONTACT", "SUPPORT", "START", "NOW"]}
            />

            <Section className="-mt-32 relative z-20" padding="none">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info Column (1/3 width) */}
                        <div className="lg:col-span-1 space-y-8">
                            <ContactDetails />
                        </div>

                        {/* Contact Form Column (2/3 width) */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 h-full">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-black text-slate-900 mb-2">Projekt anfragen</h2>
                                    <p className="text-slate-600">Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Map Section */}
            <Section background="slate" padding="default">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Hier finden Sie uns</h2>
                        <p className="text-lg text-slate-600">Besuchen Sie unser Büro in Rodgau für ein persönliches Gespräch.</p>
                    </div>
                    <Map />
                </Container>
            </Section>

            <FAQ />
        </main>
    );
}
