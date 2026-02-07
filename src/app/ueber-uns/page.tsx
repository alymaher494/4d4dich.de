"use client";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutDifference from "@/components/sections/about/AboutDifference";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import TechStack from "@/components/sections/TechStack";
import ContactCTA from "@/components/sections/ContactCTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <AboutValues />
            <ClientsMarquee />
            <AboutDifference />
            <TechStack />
            <ContactCTA />
        </main>
    );
}
