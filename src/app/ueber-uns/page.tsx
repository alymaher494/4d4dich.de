"use client";

import Hero from "./_components/Hero";
import Values from "./_components/Values";
import Difference from "./_components/Difference";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import TechStack from "@/components/sections/TechStack";
import ContactCTA from "@/components/sections/ContactCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Values />
            <ClientsMarquee />
            <Difference />
            <TechStack />
            <Testimonials />
            <ContactCTA />
        </main>
    );
}
