"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function AboutHero() {
    return (
        <InternalPageHero
            badge="Über Uns"
            title="4D Für Dich ist"
            highlight="mehr als eine Agentur."
            description="Wir sind Ihr Partner für ganzheitliche Lösungen. Von der ersten Idee bis zum fertigen Produkt – Design, Druck und digitales Marketing aus einer Hand."
            marqueeText={["ABOUT US", "TEAM", "VISION", "VALUES"]}
        />
    );
}
