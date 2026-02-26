import { getPageBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import BriefingForm from "@/components/forms/BriefingForm";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const pageData = await getPageBySlug(params.slug);
    if (!pageData) return { title: "Service Not Found" };

    return {
        title: pageData.acf?.seo_title || pageData.title.rendered,
        description: pageData.acf?.seo_description || "Professionelle Dienstleistungen von 4D Marketing & Design.",
    };
}

export default async function DynamicServicePage({ params }: { params: { slug: string } }) {
    const pageData = await getPageBySlug(params.slug);

    if (!pageData) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Simple Dynamic Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                </div>

                <Container className="relative z-10 text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        {pageData.title.rendered}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {pageData.acf?.hero_description || "Maßgeschneiderte Lösungen für Ihren Erfolg."}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#contact" className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-secondary transition-all">
                            Jetzt anfragen
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Main Content Area */}
            <Section>
                <Container size="narrow">
                    <div
                        className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-black prose-headings:text-slate-900
                        prose-p:text-slate-600 prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
                    />
                </Container>
            </Section>

            {/* Contact Section */}
            <Section background="slate">
                <Container>
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-bold uppercase tracking-wider">KONTAKT</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Starten wir Ihr Projekt</h2>
                        <div className="w-24 h-2 bg-secondary rounded-full mx-auto" />
                    </div>
                    <BriefingForm />
                </Container>
            </Section>
        </main>
    );
}
