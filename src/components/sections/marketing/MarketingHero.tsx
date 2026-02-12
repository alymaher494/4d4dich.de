"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function MarketingHero() {
    return (
        <InternalPageHero
            badge="Growth Hacking"
            title="Marketing, das"
            highlight="wirkt."
            description="Effektive Online-Kampagnen, SEO, Social Media und Content-Marketing-Strategien zur Steigerung Ihres Unternehmenserfolgs."
            marqueeText={["GROWTH", "ANALYTICS", "STRATEGY", "SUCCESS"]}
        />
    );
}
