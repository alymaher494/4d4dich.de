"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function BlogHero() {
    return (
        <InternalPageHero
            badge="Insights & News"
            title="Wissen, das"
            highlight="weiterbringt."
            description="Aktuelle Trends, Tipps und Einblicke aus der Welt von Design, Marketing und Technologie."
            marqueeText={["INSIGHTS", "NEWS", "TRENDS", "TIPS"]}
        />
    );
}
