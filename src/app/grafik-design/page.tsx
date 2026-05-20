import { getPageBySlug, constructMetadata } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import WhyUs from "./_components/WhyUs";
import { grafikDesignContent } from "@/data/website-text";
import Pricing from "@/components/sections/Pricing";
import GrafikDesignContactForm from "@/components/forms/GrafikDesignContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('service-grafik-design');
    return constructMetadata(
        pageData,
        "Grafik Design & Branding Rodgau | 4D FÜR DICH",
        "Kreative Grafik-Designs, Logo-Entwicklung und Branding-Identitäten, die Ihre Marke zum Strahlen bringen.",
        "/grafik-design"
    );
}

export default async function GrafikDesignPage() {
    const pageData = await getPageBySlug('service-grafik-design');

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            <Hero initialData={pageData} />
            <Intro />
            <Pricing
                items={pageData?.acf?.price_list}
                title={pageData?.acf?.pricing_title}
            />
            <WhyUs />

            {/* Custom CTA Text */}
            <Section>
                <Container size="narrow" className="text-center relative">
                    <span className="text-9xl text-slate-100 absolute -top-10 -left-10 font-serif">"</span>
                    <p className="text-3xl md:text-4xl font-black text-slate-800 leading-tight relative z-10">
                        {pageData?.acf?.quote_text || grafikDesignContent.cta}
                    </p>
                </Container>
            </Section>

            {/* Contact Form Section */}
            <Section background="slate">
                <Container size="narrow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            {pageData?.acf?.cta_title || "Starten wir Ihr Design-Projekt"}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {pageData?.acf?.cta_text || "Erzählen Sie uns von Ihrer Vision. Wir setzen sie um."}
                        </p>
                    </div>
                    <GrafikDesignContactForm serviceName="Grafik & Design" />
                </Container>
            </Section>
        </main>
    );
}
