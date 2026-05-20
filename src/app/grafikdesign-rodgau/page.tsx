import { getPageBySlug, constructMetadata } from "@/lib/wordpress";
import Hero from "../grafik-design/_components/Hero";
import Intro from "../grafik-design/_components/Intro";
import Portfolio from "../druck/_components/Portfolio";
import Benefits from "../grafik-design/_components/WhyUs";
import DruckContactForm from "@/components/forms/DruckContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('grafikdesign-rodgau');
    return constructMetadata(
        pageData,
        "Grafikdesign Agentur in Rodgau | Designbüro | 4D Für Dich",
        "Ihre Agentur für professionelles Grafikdesign in Rodgau. Wir gestalteten Logos, Corporate Design, Webseiten und Printprodukte. Jetzt anfragen.",
        "/grafikdesign-rodgau"
    );
}

export default async function GrafikdesignRodgauPage() {
    const pageData = await getPageBySlug('service-marketing'); // Using marketing or generic data

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            <Hero initialData={pageData} />
            <Intro />

            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto py-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                            Designbüro
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Grafikdesign Agentur in Rodgau</h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">Willkommen bei 4D Für Dich, Ihrer kreativen <strong className="text-slate-900">Grafikdesign Agentur direkt in Rodgau</strong>. Ein starkes visuelles Erscheinungsbild ist der Schlüssel zum Erfolg. Wir helfen lokalen und überregionalen Unternehmen, sich ästhetisch und wirkungsvoll zu präsentieren.</p>

                        <div className="h-px w-full bg-slate-100 my-10 border-0" />

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-6">Unser Leistungsspektrum im Grafikdesign</h3>
                        <ul className="mb-6 space-y-4">
                            <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">✒️</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Corporate Design (CI/CD):</strong> Von der Namensfindung bis zum kompletten Markenauftritt entwickeln wir Identitäten, die Vertrauen schaffen.</span></li>
                            <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">🎨</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Logo-Design Rodgau:</strong> Ihr Firmenlogo ist Ihr Aushängeschild. Wir entwerfen einzigartige und zeitlose Logos.</span></li>
                            <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">📄</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Printdesign:</strong> Flyer, Broschüren, Visitenkarten, Plakate und Produktkataloge – professionell layoutet und direkt aus unserer eigenen Druckerei.</span></li>
                            <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">💻</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Digitales Design:</strong> Social Media Grafiken, Webdesign-Screendesigns (UX/UI) und digitale Assets.</span></li>
                        </ul>

                        <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Warum 4D Für Dich als Design-Partner in Rodgau?</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Die richtige Agentur zu finden ist Vertrauenssache. Unser Vorteil ist unsere regionale Präsenz. Sie können jederzeit für ein Briefing in unser Büro in Rodgau kommen. Wir sprechen nicht nur über Design, sondern auch über die strategische Wirkung auf Ihre Zielgruppe. Mit unserer In-House Druckerei können wir zudem garantieren, dass das Layout auf dem Papier genauso perfekt aussieht wie auf dem Bildschirm.</p>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-12 shadow-sm relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                            <h4 className="font-black text-2xl text-slate-900 mb-6 relative z-10">Besuchen Sie unser Designbüro in Rodgau</h4>
                            <div className="space-y-2 text-lg text-slate-600 relative z-10">
                                <p className="font-bold text-slate-900">4D Für Dich – Grafikdesign & Marketing</p>
                                <p>Ludwigstraße 2A</p>
                                <p>63110 Rodgau</p>
                                <p className="mt-4 font-bold text-secondary">Tel: 0151 41374672</p>
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
                            Lassen Sie uns über Ihr Design sprechen
                        </h2>
                        <p className="text-lg text-slate-600">
                            Egal ob Redesign oder neue Marke – wir sind Ihr Ansprechpartner für Grafikdesign in Rodgau.
                        </p>
                    </div>
                    <DruckContactForm serviceName="Grafikdesign Rodgau Anfrage" />
                </Container>
            </Section>
        </main>
    );
}
