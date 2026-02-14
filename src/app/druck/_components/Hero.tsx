"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function DruckHero() {
    return (
        <InternalPageHero
            badge="Premium Druckservice"
            title="Druck, der"
            highlight="beeindruckt."
            description="Von der Visitenkarte bis zur XL-Außenwerbung. Wir bringen Ihre Marke mit höchster Präزision aufs Papier (und darüber hinaus)."
            marqueeText={["VISITENKARTEN", "FLYER", "BANNER", "BROSCHÜREN", "ROLL-UPS", "AUTOBESCHRIFTUNG"]}
            backgroundImage="/images/assets/6ef2c0c0daecd5ce341c8cdba49c7151.jpg"
            ctaText="Jetzt Angebot anfordern"
            ctaHref="/kontakt"
        />
    );
}

