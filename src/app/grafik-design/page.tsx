"use client";

import GrafikDesignHero from "@/components/sections/grafik-design/GrafikDesignHero";
import GrafikDesignIntro from "@/components/sections/grafik-design/GrafikDesignIntro";
import GrafikDesignWhyUs from "@/components/sections/grafik-design/GrafikDesignWhyUs";
import { grafikDesignContent } from "@/data/website-text";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

export default function GrafikDesignPage() {
    return (
        <main className="bg-white min-h-screen">
            <GrafikDesignHero />
            <GrafikDesignIntro />
            <GrafikDesignWhyUs />

            {/* Custom CTA Text */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center relative">
                    <span className="text-9xl text-slate-100 absolute -top-10 -left-10 font-serif">"</span>
                    <p className="text-3xl md:text-4xl font-black text-slate-800 leading-tight relative z-10">
                        {grafikDesignContent.cta}
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Starten wir Ihr Design-Projekt</h2>
                        <p className="text-lg text-slate-600">Erzählen Sie uns von Ihrer Vision. Wir setzen sie um.</p>
                    </div>
                    <ServiceContactForm serviceName="Grafik & Design" />
                </div>
            </section>
        </main>
    );
}
