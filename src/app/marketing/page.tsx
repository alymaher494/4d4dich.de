"use client";

import MarketingHero from "@/components/sections/marketing/MarketingHero";
import MarketingFeatures from "@/components/sections/marketing/MarketingFeatures";
import MarketingStrategy from "@/components/sections/marketing/MarketingStrategy";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

export default function MarketingPage() {
    return (
        <div className="bg-white min-h-screen">
            <MarketingHero />
            <MarketingFeatures />
            <MarketingStrategy />

            {/* Contact Form Section */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Wachstum startet hier</h2>
                        <p className="text-lg text-slate-600">Lassen Sie uns Ihre Marketing-Strategie besprechen.</p>
                    </div>
                    <ServiceContactForm serviceName="Digital Marketing" />
                </div>
            </section>
        </div>
    );
}
