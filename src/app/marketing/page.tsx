import { getPageBySlug, constructMetadata } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Strategy from "./_components/Strategy";
import Pricing from "@/components/sections/Pricing";
import MarketingContactForm from "@/components/forms/MarketingContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('service-marketing');
    return constructMetadata(
        pageData,
        "Digital Marketing Agentur | Online Erfolg für Ihr Business",
        "Professionelles Digital Marketing, SEO und Social Media Management in Rodgau und Frankfurt.",
        "/marketing"
    );
}

export default async function MarketingPage() {
    const pageData = await getPageBySlug('service-marketing');

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            <Hero initialData={pageData} />
            <Features />
            <Pricing
                items={pageData?.acf?.price_list}
                title={pageData?.acf?.pricing_title}
            />
            <Strategy />

            {/* Contact Form Section */}
            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                            {pageData?.acf?.cta_title || "Wachstum startet hier"}
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            {pageData?.acf?.cta_text || "Lassen Sie uns Ihre Vision in messbare Ergebnisse verwandeln. Vereinbaren Sie jetzt Ihr Strategiegespräch."}
                        </p>
                    </div>
                    <MarketingContactForm serviceName="Digital Marketing" />
                </Container>
            </Section>
        </main>
    );
}
