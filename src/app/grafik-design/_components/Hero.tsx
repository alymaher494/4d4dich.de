"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function GrafikDesignHero() {
    return (
        <InternalPageHero
            badge="Grafik & Design Studio"
            title="Design, das"
            highlight="begeistert."
            description="Wir gestalten visuelle Identitäten, die im Gedächtnis bleiben. Vom Logo bis zum kompletten Corporate Design."
            marqueeText={["LOGO DESIGN", "BRANDING", "SOCIAL MEDIA", "ILLUSTRATION", "UI/UX DESIGN", "CONCEPT ART"]}
            backgroundImage="/images/assets/266d698c07a5ec9ba33fda483d67f939.jpg"
            ctaText="Kreativprojekt starten"
            ctaHref="/kontakt"
        />
    );
}

