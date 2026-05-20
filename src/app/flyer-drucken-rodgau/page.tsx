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
    const pageData = await getPageBySlug('flyer-drucken-rodgau');
    return constructMetadata(
        pageData,
        "Flyer drucken in Rodgau | Günstig & Schnell | 4D Für Dich",
        "Lassen Sie Ihre Flyer in Rodgau bei 4D Für Dich drucken. Hochwertige Papiersorten, Express-Druck und professionelles Design direkt vor Ort.",
        "/flyer-drucken-rodgau"
    );
}

export default async function FlyerDruckenRodgauPage() {
    const pageData = await getPageBySlug('flyer-drucken-rodgau');

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            <Hero initialData={pageData} />
            <Intro acf={pageData?.acf} />

            <Section>
                <Container>
                    {pageData?.acf?.main_content ? (
                        <div
                            className="prose prose-xl max-w-4xl mx-auto py-12 text-slate-600 prose-headings:text-slate-900 prose-strong:text-slate-900 prose-headings:font-black"
                            dangerouslySetInnerHTML={{ __html: pageData.acf.main_content }}
                        />
                    ) : (
                        <div className="max-w-4xl mx-auto py-16 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                                Werbetechnik
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 leading-tight">Flyer drucken in Rodgau</h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">Sie suchen eine zuverlässige Druckerei, um <strong className="text-slate-900">Flyer in Rodgau zu drucken</strong>? 4D Für Dich bietet Ihnen exzellenten Druckservice, schnelle Produktionszeiten und auf Wunsch auch das komplette Layout und Design Ihrer Werbematerialien.</p>

                            <div className="h-px w-full bg-slate-100 my-10 border-0" />

                            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-6">Warum Flyer bei uns in Rodgau drucken?</h3>
                            <ul className="mb-6 space-y-4">
                                <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Persönliche Beratung vor Ort:</strong> Besuchen Sie uns in Rodgau und lassen Sie sich zu Papieren, Grammaturen und Veredelungen beraten.</span></li>
                                <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Verschiedene Formate:</strong> Ob DIN A4, A5, A6, quadratisch oder als Wickelfalz – wir drucken alles.</span></li>
                                <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Premium Qualität:</strong> Brillanter Farbdruck auf hochwertigen Materialien, glänzend, matt oder mit Soft-Touch-Veredelung.</span></li>
                                <li className="flex gap-4 items-start"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div><span className="text-lg text-slate-600"><strong className="text-slate-900">Express-Optionen:</strong> Wenn es schnell gehen muss, bieten wir Prioritätsdruck für eilige Termine an.</span></li>
                            </ul>

                            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Unser Service aus einer Hand</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">Viele Kunden in Rodgau schätzen unseren Full-Service: Sie haben noch kein fertiges Design? Unsere Grafikabteilung entwirft den perfekten Flyer für Ihre Marketingaktion. Vom Konzept bis zum fertig gedruckten Produkt betreuen wir Sie ganzheitlich.</p>

                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-12 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                                <h4 className="font-black text-2xl text-slate-900 mb-6 relative z-10">Wir sind in Rodgau für Sie da</h4>
                                <div className="space-y-2 text-lg text-slate-600 relative z-10">
                                    <p className="font-bold text-slate-900">4D Für Dich – Ihre lokale Druckerei</p>
                                    <p>Ludwigstraße 2A</p>
                                    <p>63110 Rodgau, Deutschland</p>
                                    <p className="mt-4 font-bold text-primary">Tel: 0151 41374672</p>
                                </div>
                            </div>
                        </div>
                    )}
                </Container>
            </Section>

            <Portfolio />
            <Benefits acf={pageData?.acf} />

            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Angebot für Ihre Flyer einholen
                        </h2>
                        <p className="text-lg text-slate-600">
                            Nennen Sie uns Auflage und Format – wir machen Ihnen kurzfristig ein passendes Angebot für Rodgau und Umgebung.
                        </p>
                    </div>
                    <DruckContactForm serviceName="Flyer drucken Rodgau" />
                </Container>
            </Section>
        </main>
    );
}
