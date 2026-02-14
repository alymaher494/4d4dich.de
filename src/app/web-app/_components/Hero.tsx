"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function WebAppHero() {
    return (
        <InternalPageHero
            badge="Web & App Development"
            title="Digital, das"
            highlight="verbindet."
            description="Wir entwickeln maßgeschneiderte Webseiten und App-Lösungen, die Ihre Kunden begeistern und Ihr Business skalieren."
            marqueeText={["NEXT.JS", "REACT", "E-COMMERCE", "MOBILE APPS", "UI/UX DESIGN", "TYPESCRIPT"]}
            backgroundImage="/images/assets/3909e693b331f215e498ceea8bc65324.jpg"
            ctaText="Jetzt Projekt starten"
            ctaHref="/kontakt"
        />
    );
}

