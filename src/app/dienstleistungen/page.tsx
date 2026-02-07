"use client";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesHero />
            <ServicesList />
            <ClientsMarquee />
            <ContactCTA />
        </main>
    );
}
