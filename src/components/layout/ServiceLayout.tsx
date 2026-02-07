import { ReactNode } from "react";
import Hero from "@/components/sections/Hero";

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    children: ReactNode;
}

export default function ServiceLayout({ title, subtitle, description, children }: ServiceLayoutProps) {
    return (
        <div className="pt-24">
            {/* Service Header */}
            <section className="px-4 md:px-8 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
                    <p className="text-xl text-primary-light font-medium">{subtitle}</p>
                    <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
                </div>
            </section>

            {/* Service Content */}
            <section className="section-padding py-12">
                {children}
            </section>

            {/* Global Service CTA */}
            <section className="section-padding py-24 text-center border-t border-white/5">
                <h2 className="text-3xl font-bold mb-6">Haben Sie Fragen zu diesem Service?</h2>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                    Kontaktieren Sie uns direkt über WhatsApp für eine schnelle Beratung und ein unverbindliches Angebot.
                </p>
                <a href="https://wa.me/4915141374672" className="btn-primary">
                    WhatsApp Beratung
                </a>
            </section>
        </div>
    );
}
