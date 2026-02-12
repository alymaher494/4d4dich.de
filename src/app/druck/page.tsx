"use client";

import DruckHero from "@/components/sections/druck/DruckHero";
import DruckIntro from "@/components/sections/druck/DruckIntro";
import DruckPortfolio from "@/components/sections/druck/DruckPortfolio";
import DruckBenefits from "@/components/sections/druck/DruckBenefits";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

export default function DruckPage() {
    return (
        <div className="bg-white min-h-screen">
            <DruckHero />
            <DruckIntro />
            <DruckPortfolio />
            <DruckBenefits />

            {/* Contact Form Section */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Jetzt unverbindlich anfragen</h2>
                        <p className="text-lg text-slate-600">Schildern Sie uns Ihr Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.</p>
                    </div>
                    <ServiceContactForm serviceName="Druck & Werbetechnik" />
                </div>
            </section>
        </div>
    );
}
