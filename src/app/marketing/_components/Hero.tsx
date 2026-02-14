"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function MarketingHero() {
    return (
        <InternalPageHero
            badge="Digital Marketing"
            title="Marken, die"
            highlight="wachsen."
            description="Datengetriebenes Marketing, das Ihre Zielgruppe erreicht und Umsätze steigert. Von SEO bis Social Media Management."
            marqueeText={["SEO", "SOCIAL MEDIA", "GOOGLE ADS", "CONTENT MARKETING", "GROWTH HACKING"]}
            backgroundImage="/images/assets/ceb5d00e9ae441e330a7214178d83f97.jpg"
            ctaText="Kostenlose Beratung"
            ctaHref="/kontakt"
        />
    );
}

