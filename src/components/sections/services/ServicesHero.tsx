"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function ServicesHero() {
    return (
        <InternalPageHero
            badge="Unsere Expertise"
            title="Alles aus"
            highlight="einer Hand."
            description="Wir bieten maßgeschneiderte Lösungen für Design, Druck, Web und Marketing. Transparent, fair und professionell."
            marqueeText={["SERVICES", "SOLUTIONS", "QUALITY", "GROWTH"]}
        />
    );
}
