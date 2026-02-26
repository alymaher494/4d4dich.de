import { getPageBySlug } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Strategy from "./_components/Strategy";
import MarketingContactForm from "@/components/forms/MarketingContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('service-marketing');
    return {
        title: pageData?.acf?.seo_title || pageData?.title?.rendered || "Digital Marketing",
        description: pageData?.acf?.seo_description || "Professionelles Digital Marketing für Ihr Unternehmen.",
    };
}

export default async function MarketingPage() {
    const pageData = await getPageBySlug('service-marketing');

    return (
        <main className="bg-white min-h-screen">
            <Hero initialData={pageData} />
            <Features />
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
