"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";

export default function ContactHero() {
    return (
        <InternalPageHero
            badge="Get in Touch"
            title="Sprechen wir"
            highlight="über Erfolg."
            description="Sie haben eine Vision? Wir haben die Expertise. Lassen Sie uns gemeinsam etwas Besonderes schaffen."
            marqueeText={["CONTACT", "SUPPORT", "START", "NOW"]}
        />
    );
}
