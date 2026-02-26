import { getPageBySlug } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Portfolio from "./_components/Portfolio";
import Benefits from "./_components/Benefits";
import DruckContactForm from "@/components/forms/DruckContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('service-druck');
    return {
        title: pageData?.acf?.seo_title || pageData?.title?.rendered || "Druck & Werbetechnik",
        description: pageData?.acf?.seo_description || "Premium Druckservice und Werbetechnik für höchste Ansprüche.",
    };
}

export default async function DruckPage() {
    const pageData = await getPageBySlug('service-druck');

    return (
        <main className="bg-white min-h-screen">
            <Hero initialData={pageData} />
            <Intro />
            <Portfolio />
            <Benefits />

            {/* Contact Form Section */}
            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            {pageData?.acf?.cta_title || "Jetzt unverbindlich anfragen"}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {pageData?.acf?.cta_text || "Schildern Sie uns Ihr Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot."}
                        </p>
                    </div>
                    <DruckContactForm serviceName="Druck & Werbetechnik" />
                </Container>
            </Section>
        </main>
    );
}
