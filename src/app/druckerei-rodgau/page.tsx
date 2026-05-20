import { getPageBySlug, constructMetadata } from "@/lib/wordpress";
import Hero from "../druck/_components/Hero";
import Intro from "../druck/_components/Intro";
import Portfolio from "../druck/_components/Portfolio";
import Benefits from "../druck/_components/Benefits";
import DruckContactForm from "@/components/forms/DruckContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('druckerei-rodgau');
    return constructMetadata(
        pageData,
        "Druckerei in Rodgau – Flyer, Speisekarten, Visitenkarten drucken | 4D Für Dich",
        "Professionelle Druckerei in Rodgau. Wir drucken Flyer, Speisekarten, Visitenkarten und Werbematerial schnell und günstig. Jetzt Angebot anfordern.",
        "/druckerei-rodgau"
    );
}

export default async function DruckereiRodgauPage() {
    const pageData = await getPageBySlug('service-druck');

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            <Hero initialData={pageData} />
            <Intro acf={pageData?.acf} />

            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto py-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                            Lokal in Rodgau
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Druckerei in Rodgau</h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">Willkommen bei 4D Für Dich, Ihrer lokalen Druckerei in Rodgau! Wir sind Spezialisten für hochwertigen Druck von Flyer, Speisekarten, Visitenkarten und Werbematerial – alles aus einer Hand. Unser Service richtet sich an lokale Unternehmen, die auf Premium-Qualität und Schnelligkeit Wert legen.</p>

                        <div className="h-px w-full bg-slate-100 my-10 border-0" />

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Flyer drucken in Rodgau</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Flyer sind eines der effektivsten Marketinginstrumente, um lokal in Rodgau auf Ihre Produkte oder Dienstleistungen aufmerksam zu machen. Wir bieten verschiedene Papiersorten, Formate und Veredelungen, damit Ihr Flyer genau den gewünschten Eindruck hinterlässt.</p>

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Speisekarten drucken Rodgau</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Für Restaurants und Cafés in Rodgau drucken wir abwischbare, langlebige Speisekarten, die bei Ihren Gästen Appetit wecken. Eine hochwertige Speisekarte spiegelt die Qualität Ihrer Küche wider.</p>

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Visitenkarten drucken</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Der erste Eindruck zählt! Mit edlen Visitenkarten heben Sie sich von der Konkurrenz ab. Wir bieten Heißfolienprägung, Spot-Lackierungen und besondere Materialien.</p>

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Warum 4D Für Dich</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Durch unsere regionale Nähe in Rodgau sind wir nicht nur Ihr Ansprechpartner vor Ort, sondern bieten auch Express-Druck, persönliche Beratung und kreative Werbetechnik.</p>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-12 shadow-sm relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                            <h4 className="font-black text-2xl text-slate-900 mb-6 relative z-10">Kontakt & Lokaler Service</h4>
                            <div className="space-y-2 text-lg text-slate-600 relative z-10">
                                <p className="font-bold text-slate-900">4D Für Dich</p>
                                <p>Ludwigstraße 2A</p>
                                <p>63110 Rodgau</p>
                                <p>Deutschland</p>
                                <p className="mt-4 font-bold text-primary">Tel: 0151 41374672</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Portfolio />
            <Benefits />

            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Jetzt unverbindlich anfragen
                        </h2>
                        <p className="text-lg text-slate-600">
                            Schildern Sie uns Ihr Druckprojekt in Rodgau – wir erstellen Ihnen ein maßgeschneidertes Angebot.
                        </p>
                    </div>
                    <DruckContactForm serviceName="Druck & Werbetechnik Rodgau" />
                </Container>
            </Section>
        </main>
    );
}
