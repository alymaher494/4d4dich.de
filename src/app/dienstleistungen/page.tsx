"use client";

import Hero from "./_components/Hero";
import List from "./_components/List";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <List />
            <ClientsMarquee />
            <ContactCTA />
        </main>
    );
}
